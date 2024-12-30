import styled from "styled-components"

export const Form = styled.form`
  background-color: var(--gray-200);
  border: 3px solid var(--gray-300);
  border-radius: 5px;

  padding: 1.5rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem; 
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
`