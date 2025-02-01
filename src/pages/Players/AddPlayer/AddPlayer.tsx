import React from "react";
import * as S from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

type AddPlayerProps = {
  onAddPlayerSubmit: (name: string) => void;
};

type FormInput = {
  name: string;
};

export const AddPlayer: React.FC<AddPlayerProps> = ({ onAddPlayerSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    onAddPlayerSubmit(data.name);
    reset({ name: "" });
  };

  return (
    <S.Form className="content" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <Input
          id="name"
          label="Nome"
          register={register("name", {
            required: "O nome é obrigatório.",
            validate: (value) =>
              value.trim() !== "" || "O nome não pode conter espaços vazios.",
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]+$/,
              message: "Apenas letras e espaços são permitidos.",
            },
          })}
        />
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
      </S.InputWrapper>

      <Button>Cadastrar Jogador</Button>
    </S.Form>
  );
};
