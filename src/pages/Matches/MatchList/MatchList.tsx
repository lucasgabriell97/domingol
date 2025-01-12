import React from "react";
import * as S from "./styles";

import { Trash2 } from "lucide-react";

import { Button } from "../../../components/Button/Button";
import { Pagination } from "../../../components/Pagination/Pagination";

import { usePagination } from "../../../hooks/usePagination";

interface MatchListProps {
  matches: {
    id: string;
    blueScoreboard: number;
    redScoreboard: number;
    date: string;
  }[];
  onDeleteMatchClick: (matchId: string) => void;
}

export const MatchList: React.FC<MatchListProps> = ({
  matches,
  onDeleteMatchClick,
}) => {
  const { currentPage, totalPages, currentItems, setPage } = usePagination(
    matches,
    2
  );

  return (
    <>
      <S.List className="content">
        {currentItems.length === 0 ? (
          <S.EmptyMatches>
            Nenhuma partida cadastrada no momento.
          </S.EmptyMatches>
        ) : (
          currentItems.map((match) => {
            const formattedDate = new Date(
              match.date + "T00:00:00"
            ).toLocaleDateString("pt-BR");

            return (
              <S.ListItem key={match.id}>
                <S.MatchWrapper>
                  <S.Date>{formattedDate}</S.Date>
                  <S.BlueTeam></S.BlueTeam>
                  <S.Result>
                    {match.blueScoreboard} x {match.redScoreboard}
                  </S.Result>
                  <S.RedTeam></S.RedTeam>
                </S.MatchWrapper>
                <Button onClick={() => onDeleteMatchClick(match.id)}>
                  <Trash2 size={20} />
                </Button>
              </S.ListItem>
            );
          })
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
