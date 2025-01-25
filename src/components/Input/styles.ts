import styled from "styled-components";

export const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
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