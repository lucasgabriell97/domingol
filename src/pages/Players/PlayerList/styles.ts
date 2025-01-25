import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  margin-bottom: 2rem;
`

export const ListItem = styled.li`
  display: flex;
  gap: 1rem;
`

export const PlayerWrapper = styled.div`
  flex: 1;
  align-content: center;

  background-color: var(--gray-400);
  border-radius: 5px;

  padding: 1rem;
`

export const PlayerName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`