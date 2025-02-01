import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

import { AddMatch } from "./AddMatch/AddMatch";
import { MatchList } from "./MatchList/MatchList";

import { Title } from "../../components/Title/Title";

import { usePlayers } from "../../context/PlayersContext";

type Match = {
  id: string;
  blueScoreboard: number;
  redScoreboard: number;
  date: string;
  blueGoals: { playerId: string; goals: number }[];
  redGoals: { playerId: string; goals: number }[];
}

export const Matches: React.FC = () => {
  const [matches, setMatches] = React.useState<Match[]>([]);
  const { players, setPlayers } = usePlayers();

  React.useEffect(() => {
    const storedMatches = localStorage.getItem("matches");
    if (storedMatches) {
      setMatches(JSON.parse(storedMatches));
    }
  }, []);

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
      blueGoals,
      redGoals
    };

    const updateMatches = [...matches, newMatch];
    setMatches(updateMatches);
    localStorage.setItem("matches", JSON.stringify(updateMatches));

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

  const onDeleteMatchClick = (matchId: string) => {
    const updatedMatches = matches.filter((match) => match.id !== matchId);
    setMatches(updatedMatches);
    localStorage.setItem("matches", JSON.stringify(updatedMatches));

    const matchToDelete = matches.find((match) => match.id === matchId);

    if (matchToDelete) {
      const updatedPlayers = players.map((player) => {
        const blueGoal = matchToDelete.blueGoals.find((goal) => goal.playerId === player.id);
        const redGoal = matchToDelete.redGoals.find((goal) => goal.playerId === player.id);

        const totalGoalsToRemove =
          (blueGoal?.goals || 0) + (redGoal?.goals || 0);

        return totalGoalsToRemove > 0
          ? { ...player, goals: player.goals - totalGoalsToRemove }
          : player;
      });

      setPlayers(updatedPlayers);
      localStorage.setItem("players", JSON.stringify(updatedPlayers));
    }
  };

  return (
    <S.Main className="container">
      <S.MatchesSection>
        <AddMatch players={players} onAddMatchSubmit={onAddMatchSubmit} />

        <Title>Partidas Realizadas</Title>

        <MatchList matches={matches} onDeleteMatchClick={onDeleteMatchClick} />
      </S.MatchesSection>
    </S.Main>
  );
};
