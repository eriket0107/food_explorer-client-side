import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'form'
    'footer';
  grid-template-rows: 12.8rem auto 7rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto 5rem;

  width: 54rem;
  grid-area: form;

  > h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.WHITE};
    margin-top: 5rem;
  }

  button {
    display: flex;
  }
  @media (max-width: 900px) {
    width: 100%;
    padding: 0 3rem;
    margin-bottom: 5rem;
  }
`
