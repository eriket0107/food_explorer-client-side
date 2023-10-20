import { Container } from './styles'

export const Button = ({ title, icon: Icon, src, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {(Icon && <Icon size={20} />) || (src && <img src={src} />)}
      <span>{title}</span>
    </Container>
  )
}
