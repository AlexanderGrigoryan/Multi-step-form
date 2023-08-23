import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Ubuntu', sans-serif;
    background: #EFF5FF;

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
     
    }
}
`


export default GlobalStyles