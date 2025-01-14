import React from "react";
import * as S from "./styles";

import { PlayersContext } from "../../context/PlayersContext";

import { Title } from "../../components/Title/Title";
import { EmptyDataMessage } from "../../components/EmptyDataMessage/EmptyDataMessage";

export const Goalscorer: React.FC = () => {
  const { players } = React.useContext(PlayersContext);

  const playersGoals = players
    .filter((player) => player.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  return (
    <S.Main className="container">
      <S.GoalscorerSection>
        <Title>Artilharia</Title>

        {playersGoals.length === 0 ? (
          <EmptyDataMessage>
            Nenhum jogador marcou gols no momento.
          </EmptyDataMessage>
        ) : (
          <S.Table>
            <S.Thead>
              <S.Tr>
                <S.Th>#</S.Th>
                <S.Th>Nome</S.Th>
                <S.Th>Gols</S.Th>
              </S.Tr>
            </S.Thead>
            <S.Tbody>
              {playersGoals.map((player, index) => (
                <S.Tr key={player.id}>
                  <S.Td>{index + 1}°</S.Td>
                  <S.Td>{player.name}</S.Td>
                  <S.Td>{player.goals}</S.Td>
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
        )}
      </S.GoalscorerSection>
    </S.Main>
  );
};
