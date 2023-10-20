import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  animation-name: rightleft;
  animation-duration: 1000ms;

  > div {
    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }

  @media (min-width: 900px) {
    width: 50vw;
    height: 100vh;
  }
  @media (max-width: 280px) {
    > div h1 {
      font-size: 3.2rem;
    }
  }

  @keyframes rightleft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;

  border-radius: 1.6rem;
  width: 31.6rem;

  animation-name: leftright;
  animation-duration: 1000ms;

  .Input {
    border: none;
    background: #0d1d25;
  }

  > button {
    display: flex;
  }

  > h2 {
    display: none;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.WHITE};
  }

  @media (max-width: 281px) {
    width: 21.6rem;
  }

  @media (min-width: 900px) {
    background-color: ${({ theme }) => theme.colors.BG_SIGNFORM};
    width: 47.6rem;
    padding: 6.4rem;

    > h2 {
      display: flex;
    }
  }

  @keyframes leftright {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`
