import React from "react";
import * as S from "./styles";

import { Trash2 } from "lucide-react";

import { useForm, useFieldArray } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

interface AddMatchProps {
  players: {
    id: string;
    name: string;
    goals: number;
  }[];
  onAddMatchSubmit: (
    blueScoreboard: number,
    redScoreboard: number,
    date: string,
    blueGoals: { playerId: string; goals: number }[],
    redGoals: { playerId: string; goals: number }[]
  ) => void;
}

interface FormValues {
  blueScoreboard: string;
  redScoreboard: string;
  date: string;
  blueGoals: { playerId: string; goals: string }[];
  redGoals: { playerId: string; goals: string }[];
}

export const AddMatch: React.FC<AddMatchProps> = ({
  players,
  onAddMatchSubmit,
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      blueGoals: [{ playerId: "", goals: "" }],
      redGoals: [{ playerId: "", goals: "" }],
    },
  });

  const blueFieldArray = useFieldArray({
    control,
    name: "blueGoals",
  });

  const redFieldArray = useFieldArray({
    control,
    name: "redGoals",
  });

  const onSubmit = (data: FormValues) => {
    const blueGoals = data.blueGoals.map((goal) => ({
      playerId: goal.playerId,
      goals: parseInt(goal.goals),
    }));
    const redGoals = data.redGoals.map((goal) => ({
      playerId: goal.playerId,
      goals: parseInt(goal.goals),
    }));
    onAddMatchSubmit(
      parseInt(data.blueScoreboard),
      parseInt(data.redScoreboard),
      data.date,
      blueGoals,
      redGoals
    );
    console.log(data);
    reset();
  };

  return (
    <S.Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <Input
          placeholder="Digite o placar do time azul"
          register={register("blueScoreboard", {
            required: "O campo é obrigatório.",
            validate: (value) =>
              value.trim() !== "" || "O campo não pode conter espaços vazios.",
            pattern: {
              value: /^\d+$/,
              message: "O placar deve conter apenas números.",
            },
          })}
        />
        {errors.blueScoreboard && (
          <S.ErrorMessage>{errors.blueScoreboard.message}</S.ErrorMessage>
        )}
        <Input
          placeholder="Digite o placar do time vermelho"
          register={register("redScoreboard", {
            required: "O campo é obrigatório.",
            validate: (value) =>
              value.trim() !== "" || "O campo não pode conter espaços vazios.",
            pattern: {
              value: /^\d+$/,
              message: "O placar deve conter apenas números.",
            },
          })}
        />
        {errors.redScoreboard && (
          <S.ErrorMessage>{errors.redScoreboard.message}</S.ErrorMessage>
        )}
        <Input
          type="date"
          register={register("date", {
            required: "O campo é obrigatório.",
          })}
        />
        {errors.date && <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>}
      </S.InputWrapper>

      <S.GoalsSection>
        <S.GoalsTitle>Gols pelo time azul</S.GoalsTitle>
        {blueFieldArray.fields.map((field, index) => (
          <S.AddGoalsWrapper key={field.id}>
            <S.Select
              {...register(`blueGoals.${index}.playerId`, {
                required: "Selecione um jogador.",
              })}
            >
              <option value="">Selecionar jogador</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </S.Select>
            <S.GoalsWrapper>
              <Input
                placeholder="Gols"
                register={register(`blueGoals.${index}.goals`, {
                  required: "Digite os gols marcados.",
                  pattern: {
                    value: /^\d+$/,
                    message: "O número de gols deve ser um valor numérico.",
                  },
                })}
              />
              {errors.blueGoals && <S.ErrorMessage>{errors.blueGoals.message}</S.ErrorMessage>}
              <Button onClick={() => blueFieldArray.remove(index)}>
                <Trash2 size={20} />
              </Button>
            </S.GoalsWrapper>
          </S.AddGoalsWrapper>
        ))}
        <Button
          onClick={() => blueFieldArray.append({ playerId: "", goals: "" })}
        >
          Adicionar
        </Button>
      </S.GoalsSection>

      <S.GoalsSection>
        <S.GoalsTitle>Gols pelo time vermelho</S.GoalsTitle>
        {redFieldArray.fields.map((field, index) => (
          <S.AddGoalsWrapper key={field.id}>
            <S.Select
              {...register(`redGoals.${index}.playerId`, {
                required: "Selecione um jogador.",
              })}
            >
              <option value="">Selecionar jogador</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </S.Select>
            <S.GoalsWrapper>
              <Input
                placeholder="Gols"
                register={register(`redGoals.${index}.goals`, {
                  required: "Digite os gols marcados.",
                  pattern: {
                    value: /^\d+$/,
                    message: "O número de gols deve ser um valor numérico.",
                  },
                })}
              />
              <Button onClick={() => redFieldArray.remove(index)}>
                <Trash2 size={20} />
              </Button>
            </S.GoalsWrapper>
          </S.AddGoalsWrapper>
        ))}
        <Button
          onClick={() => redFieldArray.append({ playerId: "", goals: "" })}
        >
          Adicionar
        </Button>
      </S.GoalsSection>

      <Button>Cadastrar Partida</Button>
    </S.Form>
  );
};
