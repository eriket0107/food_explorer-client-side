import styled from "styled-components"

export const Container  = styled.ul`   

  display: flex;
  
  flex-direction: column;
  align-items: center;
  gap: 2px;
  
  width: 100vw;
  
  background-color: ${({theme})=> theme.colors.BG_HEADERFOOTER};
  list-style: none;
  

> li{
  display: flex;
  justify-content: flex-end;
  
  width: 100%;
  
  background-color: #0D1D25;
  padding: 1rem;
  
  animation-name: ${({animation}) => animation ? "appear" :  "disappear"};
  animation-duration:500ms;
  animation-fill-mode: forwards;
  
  .menu-list{
    display: flex;
    flex-direction: row-reverse;
    margin-right: 2rem;
    }
  }
  
  .desactive{
    display: none;
  }
  

@keyframes appear {
    0%{
      transform: scaleY(0);
    }
    100%{
      transform: scaleY(1);
    }
  }

  @keyframes disappear {
    0%{
      transform: scaleY(1);
    }
    100%{
      transform: scaleY(0);
    }
  } 
  
`