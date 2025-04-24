import React from "react";

import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer"

import { PlayersProvider } from "./context/PlayersContext.tsx";
import { AppRoutes } from "./routes.tsx";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <PlayersProvider>
        <AppRoutes />
      </PlayersProvider>
      <Footer />
    </>
  );
};
