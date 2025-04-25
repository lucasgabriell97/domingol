import styled from "styled-components";

export const Header = styled.header`
  box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -webkit-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -moz-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1216px;
  padding: 1rem 2.4rem;
  margin: 0 auto;

  @media (width >= 768px) {
    padding: 1.6rem 2.4rem;
  }
`

export const Logo = styled.img`
  width: 7rem;
`

export const MenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  background-color: var(--gray-200);
  border: 3px solid var(--gray-300);
  border-radius: 50%;
  cursor: pointer;
  
  @media (width >= 768px) {
    display: none;
  }

  svg {
    color: var(--gray-500);
  }
`;

export const Navbar = styled.nav<{ $isMobileOpen: boolean }>`
  display: ${({ $isMobileOpen }) => ($isMobileOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: var(--gray-200);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  @media (width >= 768px) {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
    background-color: transparent;
  }
`

export const LinkList = styled.ul<{ $isMobileOpen: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobileOpen }) => ($isMobileOpen ? "column" : "row")};
  align-items: center;
  gap: 5rem;
  margin-top: ${({ $isMobileOpen }) => ($isMobileOpen ? "8rem" : "0")};

  @media (width >= 768px) {
    gap: 2rem;
  }
`

export const LinkListItem = styled.li`
  font-size: 1.8rem;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }

  a {
    color: #3f3f3f;
    font-weight: 500;
    transition: color 0.3s, font-weight 0.3s;

    &:hover {
      color: #000;
    }

    &.active {
      font-weight: 600;
      color: #000;
    }
  }
`