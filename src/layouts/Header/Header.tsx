import React from "react";
import * as S from "./styles";

import Logo from "../../assets/images/Logo.png";

import { NavLink } from "react-router";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <NavLink to="/">
          <S.Logo src={Logo} alt="Logo da Domingol" />
        </NavLink>

        <S.Navbar>
          <S.LinkList>
            <S.LinkListItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Início
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/jogadores"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Jogadores
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/partidas"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Partidas
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/artilharia"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Artilharia
              </NavLink>
            </S.LinkListItem>
          </S.LinkList>
        </S.Navbar>
      </S.HeaderContainer>
    </S.Header>
  );
};
