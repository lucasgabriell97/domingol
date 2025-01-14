import React from "react";
import * as S from "./styles";

export const EmptyDataMessage: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <S.EmptyDataMessage>{children}</S.EmptyDataMessage>;
};
