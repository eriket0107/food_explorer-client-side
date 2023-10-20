import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 14px;
  border-radius: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BG_SEARCH};
  padding: 1.2rem 1.4rem;
  height: 4.8rem;

  > input {
    width: 100%;
    border: none;
    color: white;
    background-color: transparent;

    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Roboto';
    font-style: normal;
  }

  > svg {
    color: ${({ theme }) => theme.colors.GRAY_300};
  }
`
