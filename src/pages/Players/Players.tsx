import React from "react";
import * as S from "./styles";

import { AddPlayer } from "./AddPlayer/AddPlayer";
import { PlayerList } from "./PlayerList/PlayerList";

import { Title } from "../../components/Title/Title";

interface Player {
  id: number;
  name: string;
}

export const Players: React.FC = () => {
  const [players, setPlayers] = React.useState<Player[]>(() => {
    const storedPlayers = localStorage.getItem("players");
    return storedPlayers ? JSON.parse(storedPlayers) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const onAddPlayerSubmit = (name: string) => {
    const newPlayer = {
      id: players.length + 1,
      name,
    };

    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const onDeletePlayerClick = (playerId: number) => {
    const newPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(newPlayers);
  };

  return (
    <S.Main className="container">
      <S.PlayersSection>
        <AddPlayer onAddPlayerSubmit={onAddPlayerSubmit} />

        <Title>Lista de jogadores</Title>
        <PlayerList
          players={players}
          onDeletePlayerClick={onDeletePlayerClick}
        />
      </S.PlayersSection>
    </S.Main>
  );
};
