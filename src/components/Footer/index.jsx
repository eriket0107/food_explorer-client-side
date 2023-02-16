import { Container, Logo } from './styles';

import FoodLogoFooter from '../../assets/foodExplorerFooter.svg';

export const Footer = ({}) => {
  return (
    <Container>
      <Logo>
        <img src={FoodLogoFooter} />
        <h1>food explorer</h1>
      </Logo>
      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>
  );
};
