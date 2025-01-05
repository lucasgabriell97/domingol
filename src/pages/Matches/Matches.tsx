import React from "react";
import * as S from "./styles";

import { AddMatch } from "./AddMatch/AddMatch";
import { MatchList } from "./MatchList/MatchList";

import { Title } from "../../components/Title/Title";

interface Match {
  id: number;
  blueScoreboard: number;
  redScoreboard: number;
  date: string;
}

export const Matches: React.FC = () => {
  const [matches, setMatches] = React.useState<Match[]>([]);

  const onAddMatchSubmit = (
    blueScoreboard: number,
    redScoreboard: number,
    date: string
  ) => {
    const newMatch = {
      id: matches.length + 1,
      blueScoreboard,
      redScoreboard,
      date,
    };

    setMatches((prevMatches) => [...prevMatches, newMatch]);
  };

  return (
    <S.Main className="container">
      <S.PlayersSection>
        <AddMatch onAddMatchSubmit={onAddMatchSubmit} />

        <Title>Partidas Realizadas</Title>

        <MatchList
          matches={matches}
          // onDeletePlayerClick={onDeletePlayerClick}
        />
      </S.PlayersSection>
    </S.Main>
  );
};
