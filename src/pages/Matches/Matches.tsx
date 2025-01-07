import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

import { AddMatch } from "./AddMatch/AddMatch";
import { MatchList } from "./MatchList/MatchList";

import { Title } from "../../components/Title/Title";

import { PlayersContext } from "../../context/PlayersContext";

interface Match {
  id: string;
  blueScoreboard: number;
  redScoreboard: number;
  date: string;
}

export const Matches: React.FC = () => {
  const [matches, setMatches] = React.useState<Match[]>([]);

  const { players, setPlayers } = React.useContext(PlayersContext);

  const onAddMatchSubmit = (
    blueScoreboard: number,
    redScoreboard: number,
    date: string,
    blueGoals: { playerId: string; goals: number }[],
    redGoals: { playerId: string; goals: number }[]
  ) => {
    const newMatch = {
      id: uuidv4(),
      blueScoreboard,
      redScoreboard,
      date,
    };

    setMatches((prevMatches) => [...prevMatches, newMatch]);

    const updatedPlayers = players.map((player) => {
      const blueGoal = blueGoals.find((goal) => goal.playerId === player.id);
      const redGoal = redGoals.find((goal) => goal.playerId === player.id);
      const totalGoals = (blueGoal?.goals || 0) + (redGoal?.goals || 0);

      return totalGoals > 0
        ? { ...player, goals: player.goals + totalGoals }
        : player;
    });

    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  return (
    <S.Main className="container">
      <S.PlayersSection>
        <AddMatch 
          players={players} 
          onAddMatchSubmit={onAddMatchSubmit} 
        />

        <Title>Partidas Realizadas</Title>

        <MatchList
          matches={matches}
          // onDeletePlayerClick={onDeletePlayerClick}
        />
      </S.PlayersSection>
    </S.Main>
  );
};
