import { Container } from './styles'

import { ButtonText } from '../ButtonText'

import plusBtn from '../../assets/plusBtn.svg'

import { FiPlusCircle } from 'react-icons/fi'

export const AddDishCard = () => {
  return (
    <Container>
      <h1>Criar novo prato</h1>
      <ButtonText icon={FiPlusCircle} />
    </Container>
  )
}
