import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    height: 4.3rem;
    background-color: var(--gray-500);
    border-radius: 5px;
    padding: 1rem;
    transition: background-color .3s;

    &:hover {
      background-color: #4b5563;
    }

    &:disabled {
      background-color: var(--gray-300);
      cursor: not-allowed;
    }
  `,
  secondary: css`
    height: 4.3rem;
    background-color: var(--gray-200);
    color: var(--black);
    border-radius: 5px;
    padding: 1rem;
    transition: background-color .3s;

    &:hover {
      background-color: var(--gray-300);
    }

    &:disabled {
      background-color: var(--gray-100);
      cursor: not-allowed;
    }
  `,
  success: css`
    height: 4.3rem;
    background-color: #28a745;
    border-radius: 5px;
    padding: 1rem;
    transition: background-color .3s;

    &:hover {
      background-color: #218838;
    }
  `,
  outline: css`
    border: 3px solid var(--gray-500);
    color: var(--gray-500);
    border-radius: 5px;
    padding: 1rem;
    transition: background-color .3s;

    &:hover {
      background-color: var(--gray-500);
      color: var(--white);
    }
  `,
};

export const Button = styled.button<{ $variant: "primary" | "secondary" | "success" | "outline" }>`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);
  
  border: none;
  cursor: pointer;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }

  ${({ $variant }) => variantStyles[$variant]}
`