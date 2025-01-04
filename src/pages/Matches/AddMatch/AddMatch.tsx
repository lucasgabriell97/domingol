import React from "react";
import * as S from "./styles";

import { useForm } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

interface AddMatchProps {
  onAddMatchSubmit: (
    blueScoreboard: number,
    redScoreboard: number,
    date: string
  ) => void;
}

interface FormValues {
  blue: string;
  red: string;
  date: string;
}

export const AddMatch: React.FC<AddMatchProps> = ({ onAddMatchSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onAddMatchSubmit(parseInt(data.blue), parseInt(data.red), data.date);
    console.log(data);
    reset();
  };

  return (
    <S.Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <Input
          placeholder="Digite o placar do time azul"
          register={register("blue", {
            required: "O campo é obrigatório.",
            validate: (value) =>
              value.trim() !== "" || "O campo não pode conter espaços vazios.",
            pattern: {
              value: /^\d+$/,
              message: "O placar deve conter apenas números.",
            },
          })}
        />
        {errors.blue && <S.ErrorMessage>{errors.blue.message}</S.ErrorMessage>}
        <Input
          placeholder="Digite o placar do time vermelho"
          register={register("red", {
            required: "O campo é obrigatório.",
            validate: (value) =>
              value.trim() !== "" || "O campo não pode conter espaços vazios.",
            pattern: {
              value: /^\d+$/,
              message: "O placar deve conter apenas números.",
            },
          })}
        />
        {errors.red && <S.ErrorMessage>{errors.red.message}</S.ErrorMessage>}
        <Input
          type="date"
          register={register("date", {
            required: "O campo é obrigatório.",
          })}
        />
        {errors.date && <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>}
      </S.InputWrapper>

      <Button>Adicionar</Button>
    </S.Form>
  );
};
