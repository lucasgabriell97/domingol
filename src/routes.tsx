import React from "react";

import { Routes, Route } from "react-router";

import { Matches } from "./pages/Matches/Matches";
import { Goalscorer } from "./pages/Goalscorer/Goalscorer";
import { Players } from "./pages/Players/Players";
import { Match } from "./pages/Match/Match";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Players />} />
      <Route path="/partidas" element={<Matches />} />
      <Route path="/artilharia" element={<Goalscorer />} />
      <Route path="/partida/:id" element={<Match />} />
    </Routes>
  );
};
