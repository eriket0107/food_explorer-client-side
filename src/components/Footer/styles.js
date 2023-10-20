import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;

  position: fixed;
  z-index: 2;
  bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 12rem;

  height: 7.7rem;
  width: 100vw;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  background-color: ${({ theme }) => theme.colors.BG_HEADERFOOTER};
  color: ${({ theme }) => theme.colors.FOOTER_COPYRIGHT};

  > span {
    display: block;
  }

  @media (max-width: 750px) {
    display: flex;
    padding: 2.4rem 3rem;
    justify-content: space-around;

    gap: 3rem;
    h1 {
      display: none;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
  gap: 11px;
  transition: 300ms;

  > h1 {
    color: ${({ theme }) => theme.colors.FOOTER_LOGO};
    font-weight: 700;
  }

  > img {
    opacity: 0.4;
    height: 30px;
    width: 30px;
  }
`
