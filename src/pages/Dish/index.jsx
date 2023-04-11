import { api } from '../../services/api';

import { Container, Main, Content, Ingredient, Quantity } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import lessBtn from '../../assets/lessBtn.svg';
import plusBtn from '../../assets/plusBtn.svg';
import previousArrow from '../../assets/previous.svg';
import placeholder from '../../assets/placeholder.svg';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const Dish = ({}) => {
  const { user } = useAuth();
  const [dish, setDish] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dishURL = dish.foodImg ? `${api.defaults.baseURL}/files/${dish.foodImg}` : placeholder;

  function handlePlus() {
    setQuantity((prev) => prev + 1);
  }
  function handleLess() {
    setQuantity((prev) => prev - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  }

  const navigate = useNavigate();
  const params = useParams();

  function handleBackNavigation() {
    navigate(-1);
  }

  function handleNavigateEditdish(id) {
    navigate(`/editDish/${id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setDish(response.data);
    }
    fetchDish();
  }, []);

  const padQuantity = quantity.toString().padStart('2', '0');
  const toFixPrice = parseFloat(dish.price);
  const price = toFixPrice * quantity;
  const isAdmin = Boolean(user.isAdmin);

  return (
    <Container>
      <Main>
        <ButtonText title={'voltar'} src={previousArrow} className={'back-btn'} onClick={handleBackNavigation} />
        <Content>
          <img src={dishURL} alt="imagem do prato" />
          <div className="plate-description">
            <h2>{dish.title}</h2>
            <p>{dish.description}</p>
            <Ingredient>
              {dish.ingredients &&
                dish.ingredients.map((ingredient, index) => <span key={index}>{ingredient.name}</span>)}
            </Ingredient>
            {!isAdmin && (
              <Quantity>
                <ButtonText src={lessBtn} onClick={handleLess} />
                <span>{padQuantity}</span>
                <ButtonText src={plusBtn} onClick={handlePlus} />
                <Button className={'btn-include'} title={`Incluir - ${price.toFixed(2)}`} />
              </Quantity>
            )}
            {isAdmin && <Button title={'Editar prato'} onClick={() => handleNavigateEditdish(dish.id)} />}
          </div>
        </Content>
      </Main>
    </Container>
  );
};
