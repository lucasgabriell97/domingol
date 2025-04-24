import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--gray-200);
  padding: 2rem;
`

export const FooterText = styled.p`
  font-size: 1.4rem;
  text-align: center;
  color: #3f3f3f;

  @media (width >= 768px) {
    font-size: 1.6rem;
  }
`

export const FooterLink = styled.a`
  text-decoration: underline;
  color: #3f3f3f;

  &:hover {
    text-decoration: none;
  }
`