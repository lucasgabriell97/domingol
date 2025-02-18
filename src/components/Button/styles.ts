import styled from "styled-components";

export const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);
  
  border: none;
  cursor: pointer;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }

  ${({ $variant }) =>
    $variant === "primary"
      ? `
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
      `
      : `
        display: flex;
        height: auto;
        padding: 0;
        background-color: transparent;
      `}
`