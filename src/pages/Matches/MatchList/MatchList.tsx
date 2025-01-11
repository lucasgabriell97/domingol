import React from "react";
import * as S from "./styles";

import { Trash2 } from "lucide-react";

import { Button } from "../../../components/Button/Button";

interface MatchListProps {
  matches: {
    id: string;
    blueScoreboard: number;
    redScoreboard: number;
    date: string;
  }[];
}

export const MatchList: React.FC<MatchListProps> = ({ matches }) => {
  return (
    <S.List className="content">
      {matches.length === 0 ? (
        <S.EmptyMatches>Nenhuma partida cadastrada no momento.</S.EmptyMatches>
      ) : (
        matches.map((match) => {
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
              <Button>
                <Trash2 size={20} />
              </Button>
            </S.ListItem>
          );
        })
      )}
    </S.List>
  );
};
