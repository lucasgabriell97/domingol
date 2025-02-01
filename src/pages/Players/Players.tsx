import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

import { AddPlayer } from "./AddPlayer/AddPlayer";
import { PlayerList } from "./PlayerList/PlayerList";

import { Title } from "../../components/Title/Title";

import { usePlayers } from "../../context/PlayersContext";

export const Players: React.FC = () => {
  const {players, setPlayers} = usePlayers();

  const onAddPlayerSubmit = (name: string) => {
    const newPlayer = {
      id: uuidv4(),
      name,
      goals: 0
    };

    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const onDeletePlayerClick = (playerId: string) => {
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
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
