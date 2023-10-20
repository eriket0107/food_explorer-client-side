import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  width: 30rem;
  height: 51.2rem;
  padding: 20px 40px 40px;
  border: 2px solid black;
  border-radius: 0.8rem;

  button {
    display: flex;
  }

  > .button-heart {
    svg path {
      color: ${({ theme }) => theme.colors.REDBUTTON_BG};
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.WHITE};

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    > h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.WHITE};
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.GRAY_200};
    }
    .description {
      width: 256px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > img {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
  }

  .price-p {
    font-size: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.PRICE};
  }

  .quantity-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;
    font-weight: 700;
    font-size: 2rem;

    > button {
      display: flex;
    }
  }
`
