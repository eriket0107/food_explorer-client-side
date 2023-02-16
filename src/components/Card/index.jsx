import { Container, Content } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

import { useState } from 'react';

import { FiHeart, FiEdit } from 'react-icons/fi';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

import lessBtn from '../../assets/lessBtn.svg';
import plusBtn from '../../assets/plusBtn.svg';
import pencil from '../../assets/pencil.svg';
import foodExplorer from '../../assets/foodExplorer.svg';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useEffect } from 'react';

export const Card = ({ data }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const imgUrl = `${api.defaults.baseURL}/files/${data.foodImg}`;
  const [quantity, setQuantity] = useState(1);
  const [coverDish, setCoverDish] = useState(imgUrl);
  const [isfavorite, setIsfavorite] = useState(null);

  function handlePlus() {
    setQuantity((prev) => prev + 1);
  }
  function handleLess() {
    setQuantity((prev) => prev - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  }
  
  function handleEdition(dish) {
    navigate(`/editDish/${dish.id}`);
  }

  async function handleFavorite() {
    const response = await api.post(`/favorites/${data.id}`);
    setIsfavorite(response.data);
  }

  useEffect(() => {
    async function renderButtonFavorite() {
      const response = await api.get(`/favorites/${data.id}`);
      setIsfavorite(response.data);
    }
    renderButtonFavorite();
  }, []);

  const favoriteIcon = isfavorite ? MdOutlineFavorite : MdOutlineFavoriteBorder;
  const padQuantity = quantity.toString().padStart('2', '0');
  const toFixPrice = parseFloat(data.price);
  const price = toFixPrice * quantity;
  const isAdmin = Boolean(user.isAdmin)
  return (
    <Container>
      {isAdmin ? (
        <ButtonText src={pencil} onClick={() => handleEdition(data)} />
      ) : (
        <ButtonText className={'button-heart'} icon={favoriteIcon} onClick={() => handleFavorite()} />
      )}
      <Content>
        <Link to={`/dish/${data.id}`}>
          <img src={coverDish} alt={`Imagem de ${data.title}`} />
          <h1>{data.title}</h1>
          <p className="description">{data.description}</p>
          <p className="price-p">R${price.toFixed(2)}</p>
        </Link>
        <div className="quantity-section">
          <ButtonText src={lessBtn} onClick={handleLess} />
          <span>{padQuantity}</span>
          <ButtonText src={plusBtn} onClick={handlePlus} />
          <Button title={'Incluir'} />
        </div>
      </Content>
    </Container>
  );
};
