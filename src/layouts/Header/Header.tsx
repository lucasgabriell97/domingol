import React from "react";
import * as S from "./styles";

import Logo from "../../assets/images/Logo.png";
import { Menu, X } from 'lucide-react';

import { NavLink } from "react-router";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <S.Header>
      <S.HeaderContainer>
        <NavLink to="/">
          <S.Logo src={Logo} alt="Logo da Domingol" />
        </NavLink>

        <S.MenuToggle onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </S.MenuToggle>

        <S.Navbar $isMobileOpen={isMenuOpen}>
          <S.LinkList $isMobileOpen={isMenuOpen}>
            <S.LinkListItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Início
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/jogadores"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Jogadores
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/partidas"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Partidas
              </NavLink>
            </S.LinkListItem>
            <S.LinkListItem>
              <NavLink
                to="/artilharia"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
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
