import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  background-color: ${({theme})=> theme.colors.CARD_BG};

  min-width: 30rem;
  height: 51.2rem;

  margin: 0 auto 5rem; 
  padding: 20px 40px 40px;
  border: 2px solid black;
  border-radius: .8rem;

  @media (min-width: 600px) {
    margin-left: 3rem;
  }
  > h1{
    font-size: 2.5rem;
    color: ${({theme})=> theme.colors.GRAY_300};
  }

  > button{
    svg {
      height: 200px;
      width: 200px;
      color: ${({theme})=> theme.colors.GRAY_300};
    }
  }
`


