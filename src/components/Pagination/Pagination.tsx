import React from "react";
import * as S from "./styles";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <S.PaginationWrapper>
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        <ChevronLeft size={20} />
      </Button>
      <S.Pages>
        Página {currentPage} de {totalPages}
      </S.Pages>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <ChevronRight size={20} />
      </Button>
    </S.PaginationWrapper>
  );
};
