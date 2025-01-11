import React from "react";
import * as S from "./styles";

import { Pencil, Trash2, ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "../../../components/Button/Button";

interface PlayerListProps {
  players: {
    id: string;
    name: string;
    goals: number;
  }[];
  onDeletePlayerClick: (playerId: string) => void;
}

export const PlayerList: React.FC<PlayerListProps> = ({
  players,
  onDeletePlayerClick,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlayers = players.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(players.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <S.List className="content">
        {currentPlayers.length === 0 ? (
          <S.EmptyPlayers>Nenhum jogador cadastrado no momento.</S.EmptyPlayers>
        ) : (
          currentPlayers.map((player) => (
            <S.ListItem key={player.id}>
              <S.PlayerWrapper>
                <S.PlayerName>{player.name}</S.PlayerName>
              </S.PlayerWrapper>
              <Button>
                <Pencil size={20} />
              </Button>
              <Button onClick={() => onDeletePlayerClick(player.id)}>
                <Trash2 size={20} />
              </Button>
            </S.ListItem>
          ))
        )}
      </S.List>

      <div>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          <ArrowLeft size={20} />
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ArrowRight size={20} />
        </Button>
      </div>
    </>
  );
};
