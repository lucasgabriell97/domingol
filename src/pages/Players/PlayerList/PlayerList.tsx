import React from "react";
import * as S from "./styles";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "../../../components/Button/Button";

interface PlayerListProps {
  players: {
    id: string;
    name: string;
    goals: number;
  }[];
  onDeletePlayerClick: (playerId: string) => void;
}

export const PlayerList: React.FC<PlayerListProps> = ({
  players,
  onDeletePlayerClick,
}) => {
  return (
    <S.List>
      {players.length === 0 ? (
        <S.EmptyPlayers>Nenhum jogador cadastrado no momento.</S.EmptyPlayers>
      ) : (
        players.map((player) => (
          <S.ListItem key={player.id}>
            <S.PlayerName>{player.name}</S.PlayerName>
            <Button>
              <Pencil size={20} />
            </Button>
            <Button onClick={() => onDeletePlayerClick(player.id)}>
              <Trash2 size={20} />
            </Button>
          </S.ListItem>
        ))
      )}
    </S.List>
  );
};
