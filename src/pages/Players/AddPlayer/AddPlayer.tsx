import React from "react";
import * as S from "./styles";

import { Plus } from "lucide-react";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";

export const AddPlayer: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  // const handleAddPlayer = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setPlayers((prevPlayers) => [
  //     ...prevPlayers,
  //     { id: prevPlayers.length + 1, name },
  //   ]);

  //   setName("")
  // };

  return (
    <S.Form>
      <Input
        type="text"
        placeholder="Digite o nome do jogador"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>
        <Plus />
      </Button>
    </S.Form>
  );
};
