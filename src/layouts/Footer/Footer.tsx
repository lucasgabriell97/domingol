import React from "react";
import * as S from "./styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterText>
        Desenvolvido com 🖤 por{" "}
        <S.FooterLink
          href="https://www.linkedin.com/in/lucas-gabriell-sarmento/"
          target="_blank"
        >
          Lucas Gabriell
        </S.FooterLink>
        .
      </S.FooterText>
    </S.Footer>
  );
};
