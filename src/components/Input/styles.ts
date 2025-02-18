import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  color: var(--gray-900);

  margin-bottom: 0.875rem;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`

export const Input = styled.input`
  font-size: 1.4rem;
  width: 100%;
  height: 4.3rem;
  border-radius: 5px;
  border: 1px solid var(--gray-500);

  padding: 1rem;

  &:focus {
    outline-color: var(--gray-300);
  } 
`