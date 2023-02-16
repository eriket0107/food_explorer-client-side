import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 5rem;
  gap: 2rem;
  max-width: 120rem;

  z-index: -1;

  > h2{
    display: flex;
    color: ${({theme}) => theme.colors.WHITE};
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
  }
  @media (max-width: 700px) {
    align-items:center;
    gap: 6rem;
  }
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  position: relative;
  animation-name: appear;
  animation-duration: 1000ms;
  > div {
      > div:first-child {
      margin-left: 50px;
    }
    > div:last-child {
      margin-right: 50px;
    }
  }
  
  > button {
    width: 50px;
    height: 51.2rem;
    border: none;
    background: ${({ theme }) => theme.colors.SLIDERARROW_BG};
  }

  .arrow-back {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .arrow-forward {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
  }

  > div {
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 27px;
    width: 1122px;
    overflow-x: auto;

    scroll-behavior: smooth;
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0px 6px ${({theme})=> theme.colors.REDBUTTON_BG};
    }   
        
    
  }

  @media (max-width: 1000px) {
    width: 90rem;
  }
  @media (max-width: 900px) {
    width: 70rem;
    }
    @media (max-width: 700px) {
    width: 50rem;
    }
    @media (max-width: 500px) {
      width: 30rem; 
      
  }

  @keyframes appear {
  0%{
    opacity: 0;
    transform: scale(0.9)
  }
}
`
