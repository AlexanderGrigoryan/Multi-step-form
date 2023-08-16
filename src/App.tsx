import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router";
import PersonalInfo from "./pages/PersonalInfo";
import Plan from "./pages/Plan";
import Addons from "./pages/Addons";
import Finish from "./pages/Finish";
import Pagination from "./components/Pagination";
import { useState } from "react";
import ThankYou from "./pages/ThankYou";

function App() {
  const [activeButton, setActiveButton] = useState<boolean>(true);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <MainContainer>
        <Pagination
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          pathname={pathname}
        />
        <Content>
          <Routes>
            <Route path="/" element={<PersonalInfo pathname={pathname} />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/finish" element={<Finish pathname={pathname} />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </Content>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: -75px;
  width: 375px;
  height: 695px;
`;
