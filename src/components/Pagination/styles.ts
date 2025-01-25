import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Pages = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--gray-900);

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`