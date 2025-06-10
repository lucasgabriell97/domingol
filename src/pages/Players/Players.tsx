import React from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

import { AddPlayer } from "./AddPlayer/AddPlayer";
import { PlayerList } from "./PlayerList/PlayerList";
import { EditPlayerModal } from "./EditPlayerModal/EditPlayerModal";

import { Title } from "../../components/Title/Title";

import { usePlayers } from "../../context/PlayersContext";

export const Players: React.FC = () => {
  const { players, setPlayers } = usePlayers();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPlayer, setSelectedPlayer] = React.useState<{
    id: string;
    name: string;
  } | null>(null);

  const onAddPlayerSubmit = (name: string) => {
    const playerExists = players.some(
      (player) => player.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (playerExists) {
      alert("Este jogador já está na lista! Escolha outro nome.");
    } else {
      const newPlayer = {
        id: uuidv4(),
        name,
        goals: 0,
      };

      const updatedPlayers = [...players, newPlayer];
      setPlayers(updatedPlayers);
      localStorage.setItem("players", JSON.stringify(updatedPlayers));
    }
  };

  const onEditPlayerClick = (playerId: string) => {
    const playerToEdit = players.find((player) => player.id === playerId);
    if (playerToEdit) {
      setSelectedPlayer(playerToEdit);
      setIsModalOpen(true);
    }
  };

  const onEditPlayerSubmit = (newName: string) => {
    if (!selectedPlayer) return;

    const playerExists = players.some(
      (player) =>
        player.name.trim().toLowerCase() === newName.trim().toLowerCase() &&
        player.id !== selectedPlayer.id
    );

    if (playerExists) {
      alert("Este jogador já está na lista! Escolha outro nome.");
      return;
    } 

    const updatedPlayers = players.map((player) =>
      player.id === selectedPlayer.id ? { ...player, name: newName } : player
    );

    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  const onDeletePlayerClick = (playerId: string) => {
    if (confirm("Tem certeza que deseja remover este jogador?") == true) {
      const updatedPlayers = players.filter((player) => player.id !== playerId);
      setPlayers(updatedPlayers);
      localStorage.setItem("players", JSON.stringify(updatedPlayers));
    }
  };

  return (
    <S.PlayersMain className="container">
      <S.PlayersSection>
        <AddPlayer onAddPlayerSubmit={onAddPlayerSubmit} />

        <Title>Lista de jogadores</Title>
        <PlayerList
          players={players}
          onEditPlayerClick={onEditPlayerClick}
          onDeletePlayerClick={onDeletePlayerClick}
        />
      </S.PlayersSection>

      {isModalOpen && selectedPlayer && (
        <EditPlayerModal
          isModalOpen={isModalOpen}
          onModalClose={() => {
            setIsModalOpen(false);
            setSelectedPlayer(null);
          }}
          initialName={selectedPlayer.name}
          onSave={onEditPlayerSubmit}
        />
      )}
    </S.PlayersMain>
  );
};
