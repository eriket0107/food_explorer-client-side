import { Container } from './styles'

export const Search = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" {...rest} />
    </Container>
  )
}
