import styled from "styled-components";

export const List = styled.ul`
  background-color: var(--gray-200);
  border: 3px solid var(--gray-300);
  border-radius: 5px;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const EmptyPlayers = styled.p`
  font-size: 1.5rem;
  text-align: center;
`

export const ListItem = styled.li`
  display: flex;
  gap: 1rem;
`

export const PlayerName = styled.p`
  flex: 1;
  align-content: center;

  background-color: var(--gray-400);
  border-radius: 5px;
  font-size: 1.6rem;
  color: var(--white);

  padding: 1rem;
`