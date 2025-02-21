import styled from "styled-components";
import { Link } from "react-router"

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

export const MatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.75rem;

  background-color: var(--gray-400);
  border-radius: 5px;

  position: relative;
  padding: 1rem;

  @media (width >= 768px) {
    gap: 1rem;
  }
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

  @media (width >= 768px) {
    font-size: 1.2rem;
  }
`

export const BlueTeam = styled.span`
  width: 20px;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 5px;

  @media (width >= 768px) {
    width: 40px;
  }
`

export const Result = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`

export const RedTeam = styled(BlueTeam)`
  background-color: #ef4444;
`

export const StyledLink = styled(Link)`
  height: 4.3rem;
  background-color: var(--gray-500);
  color: var(--white);
  border-radius: 5px;
  padding: 1rem;
  transition: background-color .3s;
  
  &:hover {
    background-color: #4b5563;
  }
` 
