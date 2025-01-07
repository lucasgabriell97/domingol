import styled from "styled-components"

export const Form = styled.form``

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
`

export const GoalsSection = styled.div``

export const GoalsTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--gray-900);

  margin-bottom: 1rem;
`

export const AddGoalsWrapper = styled.div`
  margin-bottom: 1rem;
`

export const Select = styled.select`
  width: 100%;
  height: 4.3rem;
  border-radius: 5px;
  border: 1px solid var(--gray-500);

  padding: 1rem;
  margin-bottom: 1rem;
`

export const GoalsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`