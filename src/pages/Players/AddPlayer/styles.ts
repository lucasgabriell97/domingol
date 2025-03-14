import styled from "styled-components"

export const PlayerForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
`

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ef4444;

  margin-bottom: 1.25rem;

  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`