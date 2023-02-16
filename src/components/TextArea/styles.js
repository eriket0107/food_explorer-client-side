import styled from "styled-components";

export const Container = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 1.4rem;

  color: ${({theme})=> theme.colors.WHITE};

  width: 100%;
  height: 17.2rem;

  background-color: ${({theme})=> theme.colors.TEXT_AREA};

  border-radius: 1rem;
  border: none;

  resize: none;
`