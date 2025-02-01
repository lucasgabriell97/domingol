import React from "react";
import * as S from "./styles";

type ButtonProps = React.PropsWithChildren &
  React.ComponentProps<"button"> & {
    onClick?: () => void;
    disabled?: boolean;
    type?: string;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type
}) => {
  return (
    <S.Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};
