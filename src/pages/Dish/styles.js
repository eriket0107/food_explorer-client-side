import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer"  
  ;
  grid-template-rows: 8.8rem auto 7.7rem;
  `
export const Main = styled.main`
  grid-area: content;
  margin: 3rem auto;
  padding: 2rem;
  max-width: 112.4rem;
  .back-btn{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 4.2rem;
  }

@media (max-width:1200px) {
  button{
    display: flex;
  }
}
`


export const Content = styled.div`
  display: flex;
  gap: 4rem;
  margin: 0 auto;
  animation-name: left-right;
  animation-duration: 1000ms;
  align-items: center;
  > img{
    width: 38rem;
    height: 38rem;
    border-radius: 50%;
  }

  > .plate-description{
    color: ${({theme})=> theme.colors.WHITE};
    font-family: 'Poppins';
    h2{
        font-weight: 500;
        font-size: 4rem; 
        margin-bottom: 2.4rem;
    }

    p{
      font-size: 2.4rem;
      font-weight: 400;
      margin-bottom: 2.4rem;
    }

  }
  @media (max-width: 820px) {
    > img{
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
    }

    > .plate-description{
      display: flex;
      flex-direction: column;
      align-items: center;

      h2{
        font-weight: 500;
        font-size: 4rem; 
        margin-bottom: 2.4rem;
      }

      p{
        font-size: 1.62247rem;
        font-weight: 400;
        margin-bottom: 2.4rem;
      }
      
      button{
        display: flex;
        flex-direction: row;
        padding: 1.2rem 1.62247rem;
      }
    }
  }
  @media (max-width: 820px) {
    width: 30.16rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 0;

  }
  @keyframes left-right {
    0%{
      opacity: 0;
      transform: translateX(-100px);
    }
    100%{
      transform: translateX(0);
    }
  }
`

export const Ingredient = styled.div`
display: flex;
gap: 1.2rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;

margin-bottom: 2.4rem;
  > span{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem .8rem;
    border-radius: .5rem;
    background-color: ${({theme})=> theme.colors.TABLE_BORDER};
    height: 3.2rem;
  }
`
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap:3.2rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  @media (max-width:800px) {
    gap:1rem;
    > .btn-include{
      width: 15rem;
    }
  }
  @media (max-width:30px) {
    > .btn-include{
      max-width: 8.7rem;
    }
  }
  
`