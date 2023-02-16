import styled from "styled-components";

export const Container = styled.section`
  > h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({theme})=> theme.colors.GRAY_200};
    margin-bottom: .8rem;
  }
`