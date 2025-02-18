import React from "react";
import * as S from "./styles";

type ButtonProps = React.PropsWithChildren &
  React.ComponentProps<"button"> & {
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
}) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
    >
      {children}
    </S.Button>
  );
};
