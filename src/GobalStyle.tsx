import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

`;

export default GlobalStyle;
