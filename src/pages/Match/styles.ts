import styled from "styled-components";

export const MatchContainer = styled.main``

export const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const MatchDate = styled.p`
  background-color: var(--gray-900);
  border-radius: 5px;
  
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);

  padding: 0.5rem;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`

export const ScoreboardContainer = styled.div`
  width: 250px;
  max-width: 100%;

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1.5rem;

  @media (width >= 768px) {
    width: 300px;
    gap: 2.5rem;
  }
`
export const TeamScoreboard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ScoreBox = styled.div<{ $team: "blue" | "red" }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ $team }) => ($team === "blue" ? "#3b82f6" : "#ef4444")};
  border-radius: 5px;

  padding-block: 1rem;
  margin-bottom: 2rem;
`

export const ScoreNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white);

  @media (width >= 768px) {
    font-size: 3rem;
  }
`

export const VersusText = styled.span`
  font-size: 2.5rem;
  font-weight: bold;

  @media (width >= 768px) {
    font-size: 3rem;
  }
`;

export const MatchGoalsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MatchGoals = styled.div`
  display: flex;
  flex-direction: column;
`

export const GoalsList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const GoalListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.4;

  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`