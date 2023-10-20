import styled from 'styled-components'

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  justify-content: center;
  margin: 0 auto 5rem;
`

export const Content = styled.main`
  width: 100%;
  grid-area: content;
  padding: 0 3rem;
`

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.BG_BANNER};
  border-radius: 0.8rem;

  justify-content: center;
  align-items: center;

  width: 112rem;
  height: 26rem;
  margin: 30rem auto 4.8rem;
  padding-right: 1rem;

  > img {
    width: 65.6rem;
    height: 41.2rem;
    margin-top: -15rem;
    margin-left: -20rem;

    animation-name: right-left;
    animation-duration: 1000ms;
  }

  .title {
    color: ${({ theme }) => theme.colors.GRAY_100};
    text-align: center;
    animation-name: left-right;
    animation-duration: 1000ms;

    > h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
    }
    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 1200px) {
    width: 90rem;
    height: 26rem;
    margin-top: 20rem;
    > img {
      width: 45.6rem;
      margin-top: -3rem;
      margin-left: -20rem;
    }

    @media (max-width: 1000px) {
      width: 70rem;
      height: 20rem;
      margin-top: 15rem;

      > img {
        width: 30.6rem;
        margin-top: 0rem;
        margin-left: -15rem;
      }

      @media (max-width: 768px) {
        width: 50rem;
        height: 15rem;

        > img {
          width: 25.6rem;
          margin-top: -1rem;
          margin-left: -2rem;
        }
        .title {
          > h1 {
            font-size: 2.5rem;
          }
          > p {
            font-size: 1.2rem;
          }
        }
      }
      @media (max-width: 600px) {
        width: 30.6rem;
        height: 12rem;

        margin-top: 15rem;

        > img {
          width: 18rem;
          margin-top: 0rem;
          margin-left: -20rem;
          position: absolute;
        }
        .title {
          margin-left: 15rem;
          > h1 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          > p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @keyframes left-right {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes right-left {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
`
