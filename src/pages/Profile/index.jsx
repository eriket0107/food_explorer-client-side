import { Container, Form } from './styles';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function Profile() {
  const { updateProfile, user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();

  async function handleUpdateProfile() {
    const updated = {
      email,
      name,
      password: newPassword,
      old_password: oldPassword,
    };

    await updateProfile({user: updated});
  }

  return (
    <Container>
      <Header />
      <Form>
        <h1>Atualize seus dados</h1>
        <Section title="Seu Nome">
          <Input placeholder="Exemplo: Maria da Silva" onChange={(e) => setName(e.target.value)} value={name} />
        </Section>
        <Section title="Email">
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Section>
        <Section title="Senha Nova">
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Section>
        <Section title="Senha Antiga">
          <Input
            placeholder="Digite sua senha antiga"
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Section>
        <Button title={'Atualizar dados'} onClick={handleUpdateProfile} />
      </Form>
      <Footer />
    </Container>
  );
}
