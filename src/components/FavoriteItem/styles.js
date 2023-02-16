import styled from "styled-components";

export const Container = styled.li`
display: flex;
flex-direction: row;
align-items: flex-start;
align-items: center;
padding: 0px;
width: 23.1rem;
height: 10.4rem;
gap: 1.3rem;
/* border: 1px solid white; */
`

export const Img = styled.div`
  > img {
    height: 7.2rem;
    width: 7.2rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  >h2{
    color: ${({theme}) => theme.colors.WHITE};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
  }
  > .btn-text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.FAVORITE_BUTTON_REMOVE};
}
`