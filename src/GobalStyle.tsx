import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    --fast-ease-out: cubic-bezier(0.175, 0.885, 0.32, 1);
    margin: 0;
    padding: 0;

    font-family: 'Manrope', sans-serif;
    color: whitesmoke;
  }

  #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

`;

export default GlobalStyle;
