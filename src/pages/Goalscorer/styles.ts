import styled from "styled-components";

export const Main = styled.main``

export const GoalscorerSection = styled.section``

export const Table = styled.table`
  width: 100%;
  font-size: 1.6rem;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  background-color: var(--gray-400);
  color: var(--white);
`

export const Tr = styled.tr`
  text-align: center;
  padding: 1rem;

  &:nth-child(even) {
    background-color: var(--gray-200);
  }

  &:hover {
    background-color: var(--gray-400);
    color: #fff;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`

export const Th = styled.th`
  border: 3px solid var(--gray-300);
  padding: 1rem;
`

export const Tbody = styled.tbody`
  color: var(--gray-900);
`

export const Td = styled(Th)`
  font-weight: 500;
`