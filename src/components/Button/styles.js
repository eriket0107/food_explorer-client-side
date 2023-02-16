import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 3.2rem;
  gap: 8px;

  border: none;
  border-radius: 5px; 

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;

  color: ${({theme}) => theme.colors.WHITE};
  background-color: ${({theme}) => theme.colors.REDBUTTON_BG};

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