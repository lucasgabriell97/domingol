import styled from "styled-components";

export const Header = styled.header`
  box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -webkit-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
  -moz-box-shadow: 0px 8px 18px -12px rgba(0,0,0,0.24);
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const Logo = styled.img`
  width: 8rem;
`

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const ListItem = styled.li`
  font-size: 1.6rem;
`