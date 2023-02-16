import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Logo } from './styles';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import FoodLogo from '../../assets/foodExplorer.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';

export function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleNavigation() {
    navigate('/register');
  }

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo>
        <img src={FoodLogo} />
        <div>
          <h1>food explorer</h1>
        </div>
      </Logo>
      <Form>
        <h2>Faça Login</h2>
        <Section title="Email">
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" onChange={(e) => setEmail(e.target.value)} />
        </Section>
        <Section title="Senha">
          <Input placeholder="No mínimo 6 caracteres" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Section>
        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText title="Crie uma conta" onClick={handleNavigation} />
      </Form>
    </Container>
  );
}
