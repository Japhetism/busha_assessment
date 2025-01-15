import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CustomText from "./CustomText";
import ActionButton from "./Button";
import Loader from "./Loader";
import Error from "./Error";
import SelectBox from "./Select";
import Alert from "./Alert";
import { IWallet } from "../../interface";

interface IAddAccount {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const ModalContent = styled.div`
  margin: 80px 40px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalBody = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const ModalForm = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ModalAlert = styled.div`
  margin-top: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.25rem;
  font-weight: bold;
`;

const AddAccount = ({ modalOpen, setModalOpen }: IAddAccount) => {
  const [wallets, setWallets] = useState<IWallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [creating, setCreating] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [createError, setCreateError] = useState<string>("");

  const isMounted = useRef(true);

  const fetchWallets = () => {
    setLoading(true);
    setError("");
    
    fetch("http://localhost:3090/wallets")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          if (data.length) {
            setWallets(data);
          } else {
            setError("Network error");
          }
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
    fetchWallets();
    
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleCreateWallet = async () => {
    setCreating(true);
    const wallet = wallets.find((item) => item.currency === selectedWallet)
    try {
      setCreateError('');

      const response = await fetch("http://localhost:3090/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wallet),
      });

      if (!response.ok) {
        setCreateError("Network error")
      } else {
        setSelectedWallet("");
        setModalOpen(false);
      }
    } catch (error) {
      setCreateError("Network error");
    } finally {
      setCreating(false);
    }
  }

  const selectBoxOptions = (wallets || []).map(wallet => ({
    label: wallet.name,
    value: wallet.currency
  }));
  
  return (
    <>
      <Modal isOpen={modalOpen}>
        <ModalContent>
          <ModalHeader>
            <CustomText fontSize="24px" fontWeight="500">Add new wallet</CustomText>
            <ActionButton onClick={() => setModalOpen(false)} variant="secondary">
              <CustomText fontSize="24px" fontWeight="500">X</CustomText>
            </ActionButton>
          </ModalHeader>
          <ModalBody>
            {loading ? (
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            ) : error ? (
              <ErrorWrapper>
                <Error message={error} onRetry={fetchWallets} />
              </ErrorWrapper>
            ) : (
              <>
                <CustomText fontSize="18px" fontWeight="400">
                  The crypto wallet will be created instantly and be available in your list of wallets.
                </CustomText>
                <ModalForm>
                  <CustomText fontSize="lg" fontWeight="500" color="#3E4C59">Select wallet</CustomText>
                  <SelectBox
                    options={selectBoxOptions}
                    value={selectedWallet}
                    onChange={(e) => setSelectedWallet(e.target.value)}
                  />
                  <ModalButton>
                    <ActionButton onClick={handleCreateWallet}>
                        <CustomText fontSize="18px" fontWeight="500" color="#FFF">
                          {creating ? "Loading..." : "Create wallet"}
                        </CustomText>
                    </ActionButton>
                  </ModalButton>
                </ModalForm>
              </>
            )}
          </ModalBody>
          <ModalAlert>
            {createError && (
              <Alert
                variant="error"
                message={createError}
                onClick={() => setCreateError("")}
              />
            )}
          </ModalAlert>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddAccount;
