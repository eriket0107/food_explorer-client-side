import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: none;
  border-radius: 5px; 

  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;

  color: ${({theme}) => theme.colors.WHITE};
  background-color: transparent;

  > img {
    height: 20px;
    width: 20px;
  } 

  > svg {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`