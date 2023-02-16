import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer"  
  ;
  grid-template-rows: 12.8rem auto 7rem;
  `
export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 108rem;
  margin: 0 auto;

  > h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({theme}) => theme.colors.WHITE};
    margin: 4.7rem 0 3.4rem;
  }
  
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 3rem;
  }
`

export const List = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 4.8rem;
  animation-name: appear;
  animation-duration: 1000ms;
  button{
      display: flex;
    }
    > .empty-favorites{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    font-style: normal;
    color: ${({theme}) => theme.colors.WHITE};
  }
  @media (max-width: 1200px) {
    gap: 2.4rem;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    width: 100%;
    gap:0;
    margin-bottom: 3rem;
  }
  @keyframes appear {
    0%{
      opacity: 0;
      transform: translateX(-50px);
    }
  }
`