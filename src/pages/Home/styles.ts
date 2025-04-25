import styled from "styled-components";

export const HomeMain = styled.main`
    padding: 8rem 2.4rem 4rem 2.4rem !important;

    @media (width >= 768px) {
      padding: 10rem 2.4rem 4rem 2.4rem !important;
      max-width: 1216px !important;
    }
`

export const HomeSection = styled.section``

export const IntroductionHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  
  @media (width >= 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10rem;
  }
`

export const SoccerIllustrationImage = styled.img``

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (width >= 768px) {
    gap: 2rem;
  }
`

export const IntroductionTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: var(--gray-900);

  @media (width >= 768px) {
    font-size: 5rem;
  }

  @media (width >= 1024px) {
    text-align: left;
  }
`

export const IntroductionDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.3;
  text-align: center;
  color: var(--gray-900);
  max-width: 60rem;

  @media (width >= 768px) {
    font-size: 2rem;
  }

  @media (width >= 1024px) {
    text-align: left;
  }
`