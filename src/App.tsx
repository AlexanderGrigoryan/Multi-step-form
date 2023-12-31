import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import PersonalInfo from "./pages/PersonalInfo";
import Plan from "./pages/Plan";
import Addons from "./pages/Addons";
import Finish from "./pages/Finish";
import ThankYou from "./pages/ThankYou";
import Pagination from "./components/Pagination";
import schema from "./schema";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormTypes } from "./types";

function App() {
  const [activeButton, setActiveButton] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

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
          errors={errors}
        />
        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <PersonalInfo
                  pathname={pathname}
                  register={register}
                  handleSubmit={handleSubmit}
                  setValue={setValue}
                  errors={errors}
                />
              }
            />
            <Route
              path="/plan"
              element={
                <Plan isChecked={isChecked} setIsChecked={setIsChecked} />
              }
            />
            <Route
              path="/addons"
              element={<Addons isChecked={isChecked} errors={errors} />}
            />
            <Route
              path="/finish"
              element={<Finish isChecked={isChecked} errors={errors} />}
            />
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

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 960px;
    height: 600px;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    padding: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: -75px;
  min-width: 375px;
  width: 100%;
  height: 695px;

  @media screen and (min-width: 1024px) {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;
