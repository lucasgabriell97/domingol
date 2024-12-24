import React from "react";
import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
