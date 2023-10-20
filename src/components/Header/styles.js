import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  z-index: 2;
`

export const Logo = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;

  > img {
    height: 40px;
    width: 40px;
  }

  > div {
    h1 {
      display: none;
      color: ${({ theme }) => theme.colors.WHITE};
    }
    span {
      display: none;
      justify-content: end;
      color: ${({ theme }) => theme.colors.PRICE};
    }
    @media (min-width: 900px) {
      > h1,
      span {
        display: flex;
      }
    }
    @media (min-width: 900px) {
      > h1 {
        display: flex;
      }
    }
  }
`
export const SearchContent = styled.div`
  max-height: 8.8rem;
  width: 23rem;
  @media (min-width: 600px) {
    width: 40rem;
  }
`
export const Content = styled.nav`
  display: flex;
  padding: 2rem 3rem;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 12.8rem;

  gap: 3.2rem;

  background-color: ${({ theme }) => theme.colors.BG_HEADERFOOTER};

  .mobile-menu {
    display: flex;
  }

  @media (min-width: 1300px) {
    padding: 4rem 12rem;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    .mobile-menu {
      display: none;
    }
  }
  @media (max-width: 1300px) {
    .orders {
      > span {
        display: none;
      }
    }
    .desktop-buttons {
      display: none;
    }
  }
`
