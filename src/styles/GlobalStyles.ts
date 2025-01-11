import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
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

  .content {
    background-color: var(--gray-200);
    border: 3px solid var(--gray-300);
    border-radius: 5px;

    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`