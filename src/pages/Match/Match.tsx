import React from "react";
import * as S from "./styles";
import { Volleyball } from "lucide-react";
import { useParams } from "react-router";

import { Title } from "../../components/Title/Title";

type Match = {
  id: string;
  blueScoreboard: number;
  redScoreboard: number;
  date: string;
  blueGoals: { playerId: string; goals: number; name: string }[];
  redGoals: { playerId: string; goals: number; name: string }[];
};

export const Match: React.FC = () => {
  const { id } = useParams();
  const [match, setMatch] = React.useState<Match[] | null>(null);

  React.useEffect(() => {
    const storedMatches = localStorage.getItem("matches");
    if (storedMatches) {
      const matches: Match[] = JSON.parse(storedMatches);
      const foundMatch = matches.filter((match) => match.id === id);
      setMatch(foundMatch);
    }
  }, [id]);

  return (
    <S.MatchContainer className="container">
      <Title>Detalhes da Partida</Title>
      {match?.map((m) => (
        <S.MatchCard key={m.id} className="box">
          <S.MatchDate>
            {new Date(m.date + "T00:00:00").toLocaleDateString("pt-BR")}
          </S.MatchDate>
          <S.ScoreboardContainer>
            <S.TeamScoreboard>
              <S.ScoreBox $team="blue">
                <S.ScoreNumber>{m.blueScoreboard}</S.ScoreNumber>
              </S.ScoreBox>
              {m.blueGoals.length > 0 && (
                <div>
                  <Volleyball size={19} style={{ marginBottom: "0.75rem" }} />
                  <S.GoalsList>
                    {m.blueGoals.map((blueGoal) => (
                      <S.GoalListItem key={blueGoal.playerId}>
                        {blueGoal.name} {blueGoal.goals}
                      </S.GoalListItem>
                    ))}
                  </S.GoalsList>
                </div>
              )}
            </S.TeamScoreboard>

            <S.VersusText>-</S.VersusText>

            <S.TeamScoreboard>
              <S.ScoreBox $team="red">
                <S.ScoreNumber>{m.redScoreboard}</S.ScoreNumber>
              </S.ScoreBox>
              {m.redGoals.length > 0 && (
                <div>
                  <Volleyball size={19} style={{ marginBottom: "0.75rem" }} />
                  <S.GoalsList>
                    {m.redGoals.map((redGoal) => (
                      <S.GoalListItem key={redGoal.playerId}>
                        {redGoal.name} {redGoal.goals}
                      </S.GoalListItem>
                    ))}
                  </S.GoalsList>
                </div>
              )}
            </S.TeamScoreboard>
          </S.ScoreboardContainer>
        </S.MatchCard>
      ))}
    </S.MatchContainer>
  );
};
