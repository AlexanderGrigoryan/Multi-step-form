import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    min-width: 100vh;
    font-family: 'Ubuntu', sans-serif;
}
`


export default GlobalStyles