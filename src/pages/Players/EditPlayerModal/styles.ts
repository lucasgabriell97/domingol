import styled from "styled-components"

export const EditPlayerModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 652px;
  margin-inline: 2.4rem;
`

export const ModalTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;

  @media (width >= 768px) {
    font-size: 1.8rem;
  }
`

export const PlayerForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
`

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ef4444;

  margin-bottom: 1.25rem;

  @media (width >= 768px) {
    font-size: 1.4rem;
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`