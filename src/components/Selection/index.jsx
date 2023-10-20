import { Container, Select } from './styles'

export const Selection = ({ ...rest }) => {
  return (
    <Container>
      <Select {...rest}>
        <option>Selecione</option>
        <option value="main">Refeição</option>
        <option value="dissert">Sobremesa</option>
        <option value="drinks">Bebidas</option>
      </Select>
    </Container>
  )
}
