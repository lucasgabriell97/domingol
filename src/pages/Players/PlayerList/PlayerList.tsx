import React from "react";
import * as S from "./styles";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "../../../components/Button/Button";
import { Pagination } from "../../../components/Pagination/Pagination";

import { usePagination } from "../../../hooks/usePagination";

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
  const { currentPage, totalPages, currentItems, setPage } = usePagination(
    players,
    2
  );

  return (
    <>
      <S.List className="content">
        {currentItems.length === 0 ? (
          <S.EmptyPlayers>Nenhum jogador cadastrado no momento.</S.EmptyPlayers>
        ) : (
          currentItems.map((player) => (
            <S.ListItem key={player.id}>
              <S.PlayerWrapper>
                <S.PlayerName>{player.name}</S.PlayerName>
              </S.PlayerWrapper>
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
