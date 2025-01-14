import styled from "styled-components";

export const Button = styled.button`
  height: 4.3rem;
  background-color: var(--gray-500);
  border-radius: 5px;
  border: none;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;

  padding: 1rem;
  transition: background-color .3s;

  &:disabled {
    background-color: var(--gray-300);
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b5563;
  }
`