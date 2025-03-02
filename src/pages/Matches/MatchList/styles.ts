import styled from "styled-components";
import { Link } from "react-router"

export const MatchList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 2rem;
`

export const MatchListItem = styled.li`
  display: flex;
  gap: 1rem;
`

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.75rem;

  background-color: var(--gray-400);
  border-radius: 5px;

  position: relative;

  @media (width >= 768px) {
    gap: 1rem;
  }
`

export const MatchDate = styled.p`
  background-color: var(--gray-900);
  border-radius: 5px;
  
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);

  position: absolute;
  left: center;
  top: -8px;
  padding: 0.2rem;

  @media (width >= 500px) {
    left: 5px;
    top: 5px;
  }

  @media (width >= 768px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`

export const ScoreBox = styled.div<{ $team: "blue" | "red" }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ $team }) => ($team === "blue" ? "#3b82f6" : "#ef4444")};
  border-radius: 5px;

  padding: 0rem 1rem;

  @media (width >= 768px) {
    padding: 0.4rem 2rem;
  }
`

export const ScoreNumber = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`

export const VersusText = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--white);
`;

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
