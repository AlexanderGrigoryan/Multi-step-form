import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
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
      <MainContainer></MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main``;
