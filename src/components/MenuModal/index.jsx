import { Container } from './styles';

import { useEffect, useState, useRef, forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Logout from '../../assets/logout.svg';
import OrdersSvg from '../../assets/order.svg';

import { FiPlus, FiBook, FiHeart, FiUser } from 'react-icons/fi';

import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

const MenuModal = ({ visible, ...rest }, ref) => {
  const { user, signOut } = useAuth();
  const isVisible = useRef(null);
  const navigate = useNavigate();

  function handleSignout() {
    signOut();
    navigate('/');
  }

  function handleNavigateFavoriteDish() {
    navigate('/favoriteDish');
  }

  const isAdmin = Boolean(user.isAdmin);

  return (
    <CSSTransition classNames="menu" unmountOnExit timeout={300} nodeRef={isVisible} in={visible}>
      <Container ref={isVisible} menu={visible} animation={visible} className={'menu'}>
        <li>
          <ButtonText className="menu-list" title={'Sair'} src={Logout} onClick={handleSignout} />
        </li>
        {!isAdmin && (
          <li>
            <ButtonText className={'menu-list'} title={'Meus favoritos'} icon={FiHeart} onClick={handleNavigateFavoriteDish} />
          </li>
        )}
        <li>
          <ButtonText className={'menu-list'} title={'Perfil'} icon={FiUser} />
        </li>
        <li>
          <ButtonText className={'menu-list'} title={'Meu Pedido'} src={OrdersSvg} />
        </li>
        {isAdmin && (
          <li className={'menu-list'}>
            <ButtonText className="menu-list" title={'Comandas'} icon={FiBook} />
          </li>
        )}
        {isAdmin && (
          <li className={'menu-list'}>
            <ButtonText className="menu-list" title={'Novo Prato'} icon={FiPlus} onClick={() => navigate('/addDish')} />
          </li>
        )}
      </Container>
    </CSSTransition>
  );
};

export default forwardRef(MenuModal);
