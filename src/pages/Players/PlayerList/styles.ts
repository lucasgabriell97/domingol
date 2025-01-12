import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 2rem;
`

export const EmptyPlayers = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`

export const ListItem = styled.li`
  display: flex;
  gap: 1rem;
`

export const PlayerWrapper = styled.div`
  flex: 1;

  background-color: var(--gray-400);
  border-radius: 5px;

  padding: 1rem;
`

export const PlayerName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
`