import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins";
  overflow-x: hidden;
  margin: 0 auto;
  font-weight:500,700;
}
h1 {
  font-size: 63px;
  color: black;
}

h2 {
  font-size: 36px;
  color: black;
}

h3 {
  font-size: 27px;
  color: black;
}

p {
  color: #bfbfbf;
}

button:hover {
  opacity: 0.7;
}

`;

export default GlobalStyle;
