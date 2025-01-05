import React from "react";
import * as S from "./styles";

import { AddPlayer } from "./AddPlayer/AddPlayer";
import { PlayerList } from "./PlayerList/PlayerList";

import { Title } from "../../components/Title/Title";

import { PlayersContext } from "../../context/PlayersContext";

export const Players: React.FC = () => {
  const {players, setPlayers} = React.useContext(PlayersContext);
  console.log(players)

  const onAddPlayerSubmit = (name: string) => {
    const newPlayer = {
      id: players.length + 1,
      name,
      goals: 0
    };

    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const onDeletePlayerClick = (playerId: number) => {
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
