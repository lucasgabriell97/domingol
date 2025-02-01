import styled from "styled-components";

export const Header = styled.header`
  box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -webkit-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -moz-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding: 2.4rem 2.4rem;
  max-width: 1216px;
  margin: 0 auto;

  @media (width >= 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.6rem 2.4rem;
  }
`

export const Logo = styled.img`
  width: 7rem;
`

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (width >= 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

export const ListItem = styled.li`
  font-size: 1.4rem;

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