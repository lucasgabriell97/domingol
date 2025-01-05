import React from "react";
import * as S from "./styles";

import { useForm } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

interface AddPlayerProps {
  onAddPlayerSubmit: (name: string) => void;
}

export const AddPlayer: React.FC<AddPlayerProps> = ({ onAddPlayerSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ name: string }>();

  const onSubmit = ({ name }: { name: string }) => {
    onAddPlayerSubmit(name);
    reset({ name: "" });
  };

  return (
    <S.Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <Input
          placeholder="Digite o nome do jogador"
          register={register("name", {
            required: "O nome é obrigatório.",
            validate: (value) => value.trim() !== "" || "O nome não pode conter espaços vazios.",
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]+$/,
              message: "Apenas letras e espaços são permitidos.",
            },
          })}
        />
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
      </S.InputWrapper>

      <Button>Adicionar</Button>
    </S.Form>
  );
};
