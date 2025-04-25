import React from "react";
import * as S from "./styles";

import SoccerIllustration from "../../assets/images/soccerIllustration.svg";

export const Home: React.FC = () => {
  return (
    <S.HomeMain className="container">
      <S.HomeSection>
        <S.IntroductionHome>
          <S.SoccerIllustrationImage
            src={SoccerIllustration}
            alt="Imagem ilustrtiva de um jogador fazendo embaixadinha"
            width={400}
          />
          <S.IntroductionContainer>
            <S.IntroductionTitle>Bem vindo ao Domingol!</S.IntroductionTitle>
            <S.IntroductionDescription>
              Gerencie seus jogadores com facilidade, registre as partidas realizadas e acompanhe em tempo real as estatísticas geradas ao longo de cada partida.
            </S.IntroductionDescription>
          </S.IntroductionContainer>
        </S.IntroductionHome>
      </S.HomeSection>
    </S.HomeMain>
  );
};
