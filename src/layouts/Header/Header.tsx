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

        <S.Nav>
          <S.List>
            <S.ListItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Partidas
              </NavLink>
            </S.ListItem>
            <S.ListItem>
              <NavLink
                to="/artilharia"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Artilharia
              </NavLink>
            </S.ListItem>
            <S.ListItem>
              <NavLink
                to="/jogadores"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Jogadores
              </NavLink>
            </S.ListItem>
          </S.List>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
};
