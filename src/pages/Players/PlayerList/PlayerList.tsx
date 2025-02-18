import React from "react";
import * as S from "./styles";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "../../../components/Button/Button";
import { Pagination } from "../../../components/Pagination/Pagination";
import { EmptyDataMessage } from "../../../components/EmptyDataMessage/EmptyDataMessage";

import { usePagination } from "../../../hooks/usePagination";

type PlayerListProps = {
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
  const reversedPlayers = [...players].reverse();

  const { currentPage, totalPages, currentItems, setPage } = usePagination(
    reversedPlayers,
    8
  );

  return (
    <>
      <S.List className="box">
        {currentItems.length === 0 ? (
          <EmptyDataMessage>
            Nenhum jogador cadastrado no momento.
          </EmptyDataMessage>
        ) : (
          currentItems.map((player) => (
            <S.ListItem key={player.id}>
              <S.PlayerWrapper>
                <S.PlayerName>{player.name}</S.PlayerName>
              </S.PlayerWrapper>
              <Button>
                <Pencil size={19} />
              </Button>
              <Button onClick={() => onDeletePlayerClick(player.id)}>
                <Trash2 size={19} />
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
