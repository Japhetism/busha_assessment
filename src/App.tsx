import { useState } from "react";
import styled from "styled-components";
import ActionButton from "./components/shared/Button";
import CustomText from "./components/shared/CustomText";
import Header from "./components/shared/Header";
import Sidemenu from "./components/shared/Sidemenu";
import AccountList from "./components/shared/AccountList";
import AddAccount from "./components/shared/AddAccount";
import { menus } from "./fixtures/menu";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const SidemenuWrapper = styled.div`
  width: 250px;
  padding: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BodyContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  background-color: #FFF;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const HeaderWithActionsWrapper = styled.div`
  border-bottom: 1px solid #d3d5d880;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedLink, setSelectedLink] = useState<string>("/")
  const username = "Oluwatobi Akindunjoye";

  return (
    <AppWrapper>
      <Header username={username} />
      <MainContentWrapper>
        <SidemenuWrapper>
          <Sidemenu links={menus} activeLink={selectedLink} onLinkClick={(link) => setSelectedLink(link)} />
        </SidemenuWrapper>

        <BodyContentWrapper>
          <HeaderWithActionsWrapper>
            <CustomText fontSize="xl" color="#000" fontWeight="700">
              Wallets
            </CustomText>
            <ActionButton variant="secondary" onClick={() => setModalOpen(true)}>
              <CustomText fontSize="lg" fontWeight="500">+ Add new wallet</CustomText>
            </ActionButton>
          </HeaderWithActionsWrapper>
          <AccountList modalOpen={modalOpen} />
          <AddAccount modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </BodyContentWrapper>

      </MainContentWrapper>
    </AppWrapper>
  );
};

export default App;
