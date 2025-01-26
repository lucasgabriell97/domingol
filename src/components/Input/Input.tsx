import React from "react";
import * as S from "./styles";

import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
};

export const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  ...rest
}) => {
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        id={id}
        type="text"
        {...register}
        {...rest}
      />
    </>
  );
};
