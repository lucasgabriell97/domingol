import React from "react";

interface MatchListProps {
  matches: {
    id: number;
    blueScoreboard: number;
    redScoreboard: number;
    date: string;
  }[];
}

export const MatchList: React.FC<MatchListProps> = ({ matches }) => {
  return (
    <ul>
      {matches.map((match) => (
        <li key={match.id}>{match.date}</li>
      ))}
    </ul>
  );
};
