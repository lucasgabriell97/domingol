import React from "react";
import * as S from "./styles";

import { Trash2, Eye } from "lucide-react";

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
};

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
      <S.MatchList className="box">
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
              <S.MatchListItem key={match.id}>
                <S.MatchContainer>
                  <S.MatchDate>{formattedDate}</S.MatchDate>
                  <S.ScoreBox $team="blue">
                    <S.ScoreNumber>{match.blueScoreboard}</S.ScoreNumber>
                  </S.ScoreBox>
                  <S.VersusText>-</S.VersusText>
                  <S.ScoreBox $team="red">
                    <S.ScoreNumber>{match.redScoreboard}</S.ScoreNumber>
                  </S.ScoreBox>
                </S.MatchContainer>
                <S.StyledLink to={`/partida/${match.id}`}>
                  <Eye size={19} />
                </S.StyledLink>
                <Button onClick={() => onDeleteMatchClick(match.id)}>
                  <Trash2 size={19} />
                </Button>
              </S.MatchListItem>
            );
          })
        )}
      </S.MatchList>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};
