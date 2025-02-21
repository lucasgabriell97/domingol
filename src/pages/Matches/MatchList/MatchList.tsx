import React from "react";
import * as S from "./styles";

import { Trash2, ChevronRight } from "lucide-react";

import { Button } from "../../../components/Button/Button";
import { Pagination } from "../../../components/Pagination/Pagination";
import { EmptyDataMessage } from "../../../components/EmptyDataMessage/EmptyDataMessage";

import { usePagination } from "../../../hooks/usePagination";

type MatchListProps = {
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
  const reversedMatches = [...matches].reverse();

  const { currentPage, totalPages, currentItems, setPage } = usePagination(
    reversedMatches,
    8
  );

  return (
    <>
      <S.List className="box">
        {currentItems.length === 0 ? (
          <EmptyDataMessage>
            Nenhuma partida cadastrada no momento.
          </EmptyDataMessage>
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
                <S.StyledLink to={`/partida/${match.id}`}>
                  <ChevronRight size={19} />
                </S.StyledLink>
                <Button onClick={() => onDeleteMatchClick(match.id)}>
                  <Trash2 size={19} />
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
