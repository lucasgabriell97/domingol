import React from "react";
import * as S from "./styles";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};
