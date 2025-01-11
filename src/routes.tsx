import React from "react";

import { Routes, Route } from "react-router";

import { Matches } from "./pages/Matches/Matches";
import { Goalscorer } from "./pages/Goalscorer/Goalscorer";
import { Players } from "./pages/Players/Players";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Matches />} />
      <Route path="/artilharia" element={<Goalscorer />} />
      <Route path="/jogadores" element={<Players />} />
    </Routes>
  );
};
