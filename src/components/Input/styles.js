import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 3.2px;

  padding: 12px 14px;

  width: 100%;
  border: solid 1px white;
  border-radius: 0.5rem;

  > input {
    background-color: transparent;
    color: white;
    outline: none;
    border: none;
    width: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
  }
`
