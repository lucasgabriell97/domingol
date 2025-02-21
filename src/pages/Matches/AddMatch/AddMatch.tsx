import React from "react";
import * as S from "./styles";

import { Plus, X } from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

type playersGoals = {
  playerId: string;
  goals: number;
  name: string;
}[];

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
    blueGoals: playersGoals,
    redGoals: playersGoals
  ) => void;
};

type FormInput = {
  blueScoreboard: string;
  redScoreboard: string;
  date: string;
};

export const AddMatch: React.FC<AddMatchProps> = ({
  players,
  onAddMatchSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const [blueGoals, setBlueGoals] = React.useState<playersGoals>([]);
  const [redGoals, setRedGoals] = React.useState<playersGoals>([]);

  const [selectedBluePlayer, setSelectedBluePlayer] = React.useState("");
  const [selectedRedPlayer, setSelectedRedPlayer] = React.useState("");
  const [blueGoalsInput, setBlueGoalsInput] = React.useState("");
  const [redGoalsInput, setRedGoalsInput] = React.useState("");

  const addGoal = (team: "blue" | "red") => {
    if (team === "blue" && selectedBluePlayer && blueGoalsInput > "0") {
      const newGoals = [...blueGoals];
      const existingPlayer = newGoals.find(
        (g) => g.playerId === selectedBluePlayer
      );

      if (existingPlayer) {
        existingPlayer.goals = parseInt(blueGoalsInput);
      } else {
        newGoals.push({
          playerId: selectedBluePlayer,
          goals: parseInt(blueGoalsInput),
          name: players.find((player) => player.id === selectedBluePlayer)?.name || ""
        });
      }

      setBlueGoals(newGoals);
      setSelectedBluePlayer("");
      setBlueGoalsInput("");
    } else if (team === "red" && selectedRedPlayer && redGoalsInput > "0") {
      const newGoals = [...redGoals];
      const existingPlayer = newGoals.find(
        (g) => g.playerId === selectedRedPlayer
      );

      if (existingPlayer) {
        existingPlayer.goals = parseInt(redGoalsInput);
      } else {
        newGoals.push({
          playerId: selectedRedPlayer,
          goals: parseInt(redGoalsInput),
          name: players.find((player) => player.id === selectedRedPlayer)?.name || ""
        });
      }

      setRedGoals(newGoals);
      setSelectedRedPlayer("");
      setRedGoalsInput("");
    }
  };

  const removeGoal = (team: "blue" | "red", playerId: string) => {
    if (team === "blue") {
      setBlueGoals(blueGoals.filter((goal) => goal.playerId !== playerId));
    } else {
      setRedGoals(redGoals.filter((goal) => goal.playerId !== playerId));
    }
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    onAddMatchSubmit(
      parseInt(data.blueScoreboard),
      parseInt(data.redScoreboard),
      data.date,
      blueGoals,
      redGoals
    );
    reset();
    setBlueGoals([]);
    setRedGoals([]);
  };

  return (
    <S.Form className="box" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="blueScoreboard"
        label="Placar do time azul"
        register={register("blueScoreboard", {
          required: "O campo é obrigatório.",
          validate: (value) =>
            value.trim() !== "" || "O campo não pode conter espaços vazios.",
          pattern: {
            value: /^\d+$/,
            message: "O campo deve conter apenas números.",
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
            message: "O campo deve conter apenas números.",
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

      <S.AddGoalsWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="blueGoal">Jogador do time azul</S.Label>
          <S.Select
            id="blueGoal"
            value={selectedBluePlayer}
            onChange={({ target }) => setSelectedBluePlayer(target.value)}
          >
            <S.Option value="">Selecione</S.Option>
            {players.map((player) => (
              <S.Option key={player.id} value={player.id}>
                {player.name}
              </S.Option>
            ))}
          </S.Select>
        </S.InputWrapper>
        <S.GoalsWrapper>
          <Input
            id="blueTeamGoal"
            label="Gols marcados"
            type="number"
            value={blueGoalsInput}
            onChange={({ target }) => setBlueGoalsInput(target.value)}
          />
          <Button onClick={() => addGoal("blue")}>
            <Plus size={19} />
          </Button>
        </S.GoalsWrapper>
      </S.AddGoalsWrapper>
      {blueGoals.length > 0 && (
        <S.List>
          {blueGoals.map((goal) => (
            <S.ListItem key={goal.playerId}>
              {players.find((player) => player.id === goal.playerId)?.name} -{" "}
              {goal.goals} {goal.goals > 1 ? "gols" : "gol"}
              <Button
                variant="secondary"
                onClick={() => removeGoal("blue", goal.playerId)}
              >
                <X size={19} />
              </Button>
            </S.ListItem>
          ))}
        </S.List>
      )}

      <S.AddGoalsWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="redGoal">Jogador do time vermelho</S.Label>
          <S.Select
            id="redGoal"
            value={selectedRedPlayer}
            onChange={({ target }) => setSelectedRedPlayer(target.value)}
          >
            <S.Option value="">Selecione</S.Option>
            {players.map((player) => (
              <S.Option key={player.id} value={player.id}>
                {player.name}
              </S.Option>
            ))}
          </S.Select>
        </S.InputWrapper>
        <S.GoalsWrapper>
          <Input
            id="redTeamGoal"
            label="Gols marcados"
            type="number"
            value={redGoalsInput}
            onChange={({ target }) => setRedGoalsInput(target.value)}
          />

          <Button type="button" onClick={() => addGoal("red")}>
            <Plus size={19} />
          </Button>
        </S.GoalsWrapper>
      </S.AddGoalsWrapper>
      {redGoals.length > 0 && (
        <S.List>
          {redGoals.map((goal) => (
            <S.ListItem key={goal.playerId}>
              {players.find((player) => player.id === goal.playerId)?.name} -{" "}
              {goal.goals} {goal.goals > 1 ? "gols" : "gol"}
              <Button
                variant="secondary"
                onClick={() => removeGoal("red", goal.playerId)}
              >
                <X size={19} />
              </Button>
            </S.ListItem>
          ))}
        </S.List>
      )}

      <Button type="submit">Cadastrar Partida</Button>
    </S.Form>
  );
};
