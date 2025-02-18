import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { App } from "./App.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </StrictMode>
);
