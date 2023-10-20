import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 14px;
  background-color: transparent;
  border-radius: 0.5rem;
  border: solid 1px white;
`
export const Select = styled.select`
  width: 100%;
  background-color: transparent;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: white;

  > option {
    background-color: ${({ theme }) => theme.colors.BG_SEARCH};
  }
`
