import { Container } from './styles';

export const ButtonText = ({ title, icon: Icon, src, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {(Icon && <Icon size={20} />) || (src && <img src={src} />)}
      {title}
    </Container>
  );
};
