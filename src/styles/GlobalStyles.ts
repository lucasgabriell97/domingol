import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-100: #f3f4f6;
    --gray-500: #6b7280;
    --gray-900: #3f3f3f;

    --black: #000;
    --white: #fff;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  span,
  button {
    display: inline-block;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    padding: 4rem 2.4rem;
  }
`