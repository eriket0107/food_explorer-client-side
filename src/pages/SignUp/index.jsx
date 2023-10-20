import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Container, Form, Logo } from './styles'

import FoodLogo from '../../assets/foodExplorer.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) return alert('Preencha todos os campos!')

    try {
      await api.post('/users', { name, email, password })
      alert('Usuário cadastrado com sucesso!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível efetuar o cadastro!')
      }
    }
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
        <h2>Cria sua conta</h2>
        <Section title="Seu Nome">
          <Input
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </Section>
        <Section title="Email">
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>
        <Section title="Senha">
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>
        <Button title="Finalizar Cadastro" onClick={handleSignUp} />
        <ButtonText title="Já tenho uma conta" onClick={() => navigate('/')} />
      </Form>
    </Container>
  )
}
