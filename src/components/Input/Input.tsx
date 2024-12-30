import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  register,
  ...rest
}) => {
  return (
    <S.Input
      placeholder={placeholder}
      {...register}
      {...rest}
    />
  );
};
