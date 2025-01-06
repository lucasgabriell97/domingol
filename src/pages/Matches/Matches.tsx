import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

import { AddMatch } from "./AddMatch/AddMatch";
import { MatchList } from "./MatchList/MatchList";

import { Title } from "../../components/Title/Title";

import { PlayersContext } from "../../context/PlayersContext";

interface Match {
  id: string;
  blueScoreboard: number;
  redScoreboard: number;
  date: string;
}

export const Matches: React.FC = () => {
  const [matches, setMatches] = React.useState<Match[]>([]);

  const {players, setPlayers} = React.useContext(PlayersContext);

  const onAddMatchSubmit = (
    blueScoreboard: number,
    redScoreboard: number,
    date: string
  ) => {
    const newMatch = {
      id: uuidv4(),
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
