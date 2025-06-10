import React from "react";
import * as S from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

type EditPlayerModalProps = {
  isModalOpen: boolean;
  initialName: string;
  onModalClose: () => void;
  onSave: (newName: string) => void;
};

type FormInput = {
  name: string;
};

export const EditPlayerModal: React.FC<EditPlayerModalProps> = ({
  isModalOpen,
  initialName,
  onModalClose,
  onSave,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  React.useEffect(() => {
    if (isModalOpen && initialName) {
      reset({ name: initialName })
    }
  }, [initialName, isModalOpen, reset])

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    onSave(data.name);
    reset({ name: "" });
  };

  if (!isModalOpen) return null;

  return (
    <S.EditPlayerModal >
      <S.ModalContent className="box">
        <S.ModalTitle>Editar Jogador</S.ModalTitle>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
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
            autoComplete="name"
          />
          {errors.name && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}

          <S.ModalActions>
            <Button type="button" onClick={onModalClose} variant="outline">
              Cancelar
            </Button>
            <Button type="submit" variant="success">Salvar</Button>
          </S.ModalActions>
        </S.Form>
      </S.ModalContent>
    </S.EditPlayerModal>
  );
};
