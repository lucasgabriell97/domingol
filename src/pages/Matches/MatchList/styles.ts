import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: 2rem;
`

export const EmptyMatches = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`

export const ListItem = styled.li`
  display: flex;
  gap: 1rem;
`

export const MatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;

  background-color: var(--gray-400);
  border-radius: 5px;

  position: relative;
  padding: 1rem;
`

export const Date = styled.span`
  background-color: var(--gray-900);
  border-radius: 5px;
  
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);

  position: absolute;
  left: 5px;
  top: 5px;
  padding: 0.3rem;
`

export const BlueTeam = styled.span`
  width: 20px;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 5px;
`

export const Result = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--white);
`

export const RedTeam = styled(BlueTeam)`
  background-color: #ef4444;
`