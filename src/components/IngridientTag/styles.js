import styled from "styled-components";

export const Tag = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: ${({theme, isNew})=> isNew ? `${theme.colors.GRAYBUTTON_BG}` : 'transparent'};
  border: ${({theme, isNew})=> isNew ?  'none' : `1px dashed ${theme.colors.GRAYBUTTON_BG}`};
  border-radius: 1rem;
  width: 118px;

  > input{
    display:flex;
    align-items: center;
    font-size: 1.4rem;
    background: none;
    border: none;
    color: ${({theme})=> theme.colors.WHITE};
    width: 100%;
    
  }
  > button{
    
    background: none;
    border: none;
    color: ${({theme})=> theme.colors.WHITE};
    transition: 200ms; 
    > svg{
      font-size: 1.2rem;
    }
    &:hover{
      transform: scale(1.1)
    }
  }

`