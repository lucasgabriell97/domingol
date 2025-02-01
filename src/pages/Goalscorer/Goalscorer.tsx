import React from "react";
import * as S from "./styles";

import { usePlayers } from "../../context/PlayersContext";

import { Title } from "../../components/Title/Title";
import { EmptyDataMessage } from "../../components/EmptyDataMessage/EmptyDataMessage";

export const Goalscorer: React.FC = () => {
  const { players } = usePlayers();

  const playersGoals = players
    .filter((player) => player.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  return (
    <S.Main className="container">
      <S.GoalscorerSection>
        <Title>Artilharia</Title>
        {playersGoals.length === 0 ? (
          <S.EmptyDataMessageWrapper className="content">
            <EmptyDataMessage>
              Nenhum jogador marcou gols no momento.
            </EmptyDataMessage>
          </S.EmptyDataMessageWrapper>
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
