import React from "react";
import * as S from "./styles";

import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  register,
  ...rest
}) => {
  return (
    <S.Input type="text" placeholder={placeholder} {...register} {...rest} />
  );
};
