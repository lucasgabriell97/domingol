import React from "react";

import { Routes, Route } from "react-router";

import { Home } from "./pages/Home/Home";
import { Players } from "./pages/Players/Players";
import { Matches } from "./pages/Matches/Matches";
import { Match } from "./pages/Match/Match";
import { Goalscorer } from "./pages/Goalscorer/Goalscorer";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogadores" element={<Players />} />
      <Route path="/partidas" element={<Matches />} />
      <Route path="/artilharia" element={<Goalscorer />} />
      <Route path="/partida/:id" element={<Match />} />
    </Routes>
  );
};
