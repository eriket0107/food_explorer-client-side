import { Container, Content, List } from './styles';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { FavoriteItem } from '../../components/FavoriteItem';
import { api } from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';

export function FavoriteDish() {
  const [favorites, setFavotires] = useState([]);

  useEffect(() => {
    async function renderFavorite() {
      const response = await api.get(`/favorites`);
      setFavotires(response.data);
    }
    renderFavorite();
  }, [favorites]);
  const checkFavorite = favorites === 'Usuário não tem pratos favoritos.';

  return (
    <Container>
      <Header />
      <Content>
      <h1>Meus Favoritos</h1>
        <List>
          {checkFavorite
            ? checkFavorite && <h2 className='empty-favorites'>{favorites}</h2>
            : favorites.map((favorite) => <FavoriteItem key={favorite.id} data={favorite} />)}
        </List>
      </Content>
      <Footer />
    </Container>
  );
}
