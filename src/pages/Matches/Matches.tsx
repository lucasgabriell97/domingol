import React from "react";
import * as S from "./styles";

import { AddMatch } from "./AddMatch/AddMatch";

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

        {/* <PlayerList
          players={players}
          onDeletePlayerClick={onDeletePlayerClick}
        /> */}
      </S.PlayersSection>
    </S.Main>
  );
};
