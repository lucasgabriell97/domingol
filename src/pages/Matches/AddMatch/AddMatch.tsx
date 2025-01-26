import React from "react";
import * as S from "./styles";

import { Plus } from "lucide-react";

import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

type AddMatchProps = {
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
};

type FormValues = {
  blueScoreboard: string;
  redScoreboard: string;
  date: string;
  blueGoals: { playerId: string; goals: string }[];
  redGoals: { playerId: string; goals: string }[];
};

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
    reset();
  };

  return (
    <S.Form className="content" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper>
        <Input
          id="blueScoreboard"
          label="Placar do time azul"
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
          id="redScoreboard"
          label="Placar do time vermelho"
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
          id="date"
          label="Data da partida"
          type="date"
          register={register("date", {
            required: "O campo é obrigatório.",
          })}
        />
        {errors.date && <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>}
      </S.InputWrapper>

      <S.GoalsWrapper>
        <S.GoalsTitle>Gols pelo time azul</S.GoalsTitle>
        {blueFieldArray.fields.map((field, index) => (
          <S.AddGoalsWrapper key={field.id}>
            <S.InputWrapper>
              <S.Label htmlFor="blueGoal">Selecionar jogador</S.Label>
              <S.Select
                id="blueGoal"
                {...register(`blueGoals.${index}.playerId`)}
              >
                <S.Option value="">Selecione</S.Option>
                {players.map((player) => (
                  <S.Option key={player.id} value={player.id}>
                    {player.name}
                  </S.Option>
                ))}
              </S.Select>
            </S.InputWrapper>

            <S.InputWrapper>
              <Input
                id="blueTeamGoal"
                label="Gols marcados"
                type="number"
                register={register(`blueGoals.${index}.goals`)}
              />
            </S.InputWrapper>
            <Button
              onClick={() => blueFieldArray.append({ playerId: "", goals: "" })}
            >
              <Plus size={19} />
            </Button>
          </S.AddGoalsWrapper>
        ))}

        <S.GoalsTitle>Gols pelo time vermelho</S.GoalsTitle>
        {redFieldArray.fields.map((field, index) => (
          <S.AddGoalsWrapper key={field.id}>
            <S.InputWrapper>
              <S.Label htmlFor="redGoal">Selecionar jogador</S.Label>
              <S.Select
                id="redGoal"
                {...register(`redGoals.${index}.playerId`)}
              >
                <S.Option value="">Selecione</S.Option>
                {players.map((player) => (
                  <S.Option key={player.id} value={player.id}>
                    {player.name}
                  </S.Option>
                ))}
              </S.Select>
            </S.InputWrapper>

            <S.InputWrapper>
              <Input
                id="redTeamGoal"
                label="Gols marcados"
                type="number"
                register={register(`redGoals.${index}.goals`)}
              />
            </S.InputWrapper>
            <Button
              onClick={() => redFieldArray.append({ playerId: "", goals: "" })}
            >
              <Plus size={19} />
            </Button>
          </S.AddGoalsWrapper>
        ))}
      </S.GoalsWrapper>

      <Button>Cadastrar Partida</Button>
    </S.Form>
  );
};
