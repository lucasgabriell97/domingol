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
                style={({ isActive }) => ({
                  color: isActive ? "#000" : "#3f3f3f",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Partidas
              </NavLink>
            </S.ListItem>
            <S.ListItem>
              <NavLink
                to="/artilheiros"
                style={({ isActive }) => ({
                  color: isActive ? "#000" : "#3f3f3f",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Artilheiros
              </NavLink>
            </S.ListItem>
            <S.ListItem>
              <NavLink
                to="/jogadores"
                style={({ isActive }) => ({
                  color: isActive ? "#000" : "#3f3f3f",
                  fontWeight: isActive ? "600" : "500",
                })}
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
