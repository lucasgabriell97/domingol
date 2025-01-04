import React from "react";
import * as S from "./styles";

interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
