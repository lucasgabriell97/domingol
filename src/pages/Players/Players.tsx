import React from "react";
import * as S from "./styles";

import { AddPlayer } from "./AddPlayer/AddPlayer";
import { PlayerList } from "./PlayerList/PlayerList";

interface Player {
  id: number;
  name: string;
}

export const Players: React.FC = () => {
  const [players, setPlayers] = React.useState<Player[]>([
    {
      id: 1,
      name: "Lucas Gabriell",
    },
    {
      id: 2,
      name: "Junior Barros",
    },
  ]);

  const onDeletePlayerClick = (playerId: number) => {
    const newPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(newPlayers);
  };

  return (
    <S.Main className="container">
      <S.PlayersSection>
        <AddPlayer />

        <S.PlayerListWrapper>
          <S.Title>Lista de Jogadores</S.Title>
          <PlayerList players={players} onDeletePlayerClick={onDeletePlayerClick} />
        </S.PlayerListWrapper>
      </S.PlayersSection>
    </S.Main>
  );
};
