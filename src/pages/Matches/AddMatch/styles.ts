import styled from "styled-components"

export const Form = styled.form`
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

export const AddGoalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`

export const InputWrapper = styled.div`
  width: 100%;
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

export const Select = styled.select`
  width: 100%;
  height: 4.3rem;
  font-size: 1.4rem;
  border-radius: 5px;
  border: 1px solid var(--gray-500);

  padding: 1rem;

  &:focus {
    outline-color: var(--gray-300);
  } 
`

export const Option = styled.option``

export const GoalsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;

  div {
    flex: 1;
    margin-bottom: 0;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  margin-bottom: 1rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: var(--gray-400);
  border-radius: 5px;

  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);

  padding: 1rem;
`

