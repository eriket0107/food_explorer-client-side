import { Container, Logo, Content, SearchContent } from './styles'

import Logout from '../../assets/logout.svg'
import OrdersSvg from '../../assets/order.svg'
import FoodLogo from '../../assets/foodExplorer.svg'

import { FiSearch, FiX, FiBook, FiMenu, FiHeart, FiUser } from 'react-icons/fi'

import { Search } from '../Search'
import { Button } from '../Button'
import MenuModal from '../MenuModal'
import { ButtonText } from '../ButtonText'

import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useSearch } from '../../hooks/search'
export const Header = () => {
  const { user, signOut } = useAuth()
  const { setSearch, search } = useSearch()

  const [isVisible, setIsVisible] = useState(false)
  const menuModalRef = useRef(null)
  const navigate = useNavigate()

  function handleClick() {
    setIsVisible(!isVisible)
  }

  function handleNavigateNewDish() {
    navigate('/addDish')
  }

  function handleNavigateFavoriteDish() {
    navigate('/favoriteDish')
  }

  function handleNavigateProfile() {
    navigate('/profile')
  }

  function handleSignout() {
    signOut()
    navigate('/')
  }

  function handleSearchDish(dish) {
    setSearch(dish)
  }
  const isAdmin = Boolean(user.isAdmin)
  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={FoodLogo} />
          <div>
            <h1>food explorer</h1>
            {isAdmin && <span>admin</span>}
          </div>
        </Logo>
        {!isAdmin && (
          <ButtonText
            title={'Meus favoritos'}
            className={'desktop-buttons'}
            onClick={handleNavigateFavoriteDish}
          />
        )}
        <SearchContent>
          <Search
            icon={FiSearch}
            placeholder={'Busque pelas opções de pratos'}
            onChange={(e) => handleSearchDish(e.target.value)}
          />
        </SearchContent>

        {isAdmin ? (
          isAdmin && (
            <Button
              className={'orders'}
              title={'Novo Prato'}
              icon={FiBook}
              onClick={handleNavigateNewDish}
            />
          )
        ) : (
          <Button className={'orders'} title={`Pedido (0)`} src={OrdersSvg} />
        )}
        <Button
          className={'orders'}
          title={'Perfil'}
          icon={FiUser}
          onClick={handleNavigateProfile}
        />
        <ButtonText
          className={'desktop-buttons'}
          src={Logout}
          onClick={handleSignout}
        />

        <ButtonText
          onClick={handleClick}
          className={'mobile-menu'}
          icon={isVisible ? FiX : FiMenu}
        />
      </Content>
      <MenuModal ref={menuModalRef} visible={isVisible} />
    </Container>
  )
}
