import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import WalletCard from "./WalletCard";
import WalletContent from "./WalletContent";
import Loader from "./Loader";
import Error from "./Error";
import { formatNumber, getWalletColor, getWalletIcon } from "../../utils/helper";
import { IAccount } from "../../interface";
import { apiBaseUrl } from "../../fixtures/constant";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: red;
  font-size: 1.25rem;
  font-weight: bold;
`;

interface IAccountList {
  modalOpen: boolean;
}

const AccountList = ({ modalOpen }: IAccountList) => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const isMounted = useRef(true);

  const fetchAccounts = () => {
    setLoading(true);
    setError("");

    fetch(`${apiBaseUrl}/accounts`)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setAccounts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          setLoading(false);
          setError("Network error");
        }
      });
  };

  useEffect(() => {
    isMounted.current = true;

    const timer = setTimeout(() => {
      fetchAccounts();
    }, 1);

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, [modalOpen]);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : error ? (
        <ErrorWrapper>
          <Error message={error} onRetry={fetchAccounts} />
        </ErrorWrapper>
      ) : (
        <>
          {accounts.length > 0 ? (
            <CardsGrid>
              {accounts.map((account: IAccount, index: number) => (
                <WalletCard
                  variant="primary"
                  key={account.id}
                  children={
                    <WalletContent
                      index={account.id}
                      value={formatNumber(account?.balance)}
                      currency={account?.currency}
                      type={account?.name}
                      typeColor={getWalletColor(account?.currency?.toLowerCase())}
                      typeIcon={getWalletIcon(account?.currency?.toLowerCase())}
                    />
                  }
                  onButtonClick={() => {}}
                />
              ))}
            </CardsGrid>
          ) : (
            <ErrorWrapper>
              <Error message="No accounts found" onRetry={fetchAccounts} />
            </ErrorWrapper>
          )}
        </>
      )}
    </>
  );
};

export default AccountList;
