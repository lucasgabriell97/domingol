import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 5rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 0.5rem;
  width: 100%;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
`

export const GoalsWrapper = styled(InputWrapper)`
  button {
    align-self: end;
  }
`

export const GoalsTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--gray-900);

  margin: 1rem 0;

  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
  color: var(--gray-900);
  
  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`

export const AddGoalsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const Select = styled.select`
  font-size: 1.2rem;
  height: 4.3rem;
  border-radius: 5px;
  border: 1px solid var(--gray-500);

  padding: 1rem;

  &:focus {
    outline-color: var(--gray-300);
  } 

  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`

export const Option = styled.option``
