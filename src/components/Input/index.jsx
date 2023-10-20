import { Container } from './styles'

export const Input = ({ icon: Icon, title, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" {...rest} />
    </Container>
  )
}
