import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-900: #1f2937;

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
    width: 100%;
    padding: 4rem 2.4rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .box {
    background-color: var(--gray-200);
    border: 3px solid var(--gray-300);
    border-radius: 5px;

    padding: 1.5rem;
  }

  #root {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }
`