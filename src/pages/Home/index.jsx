import { Container, Content, Banner } from './styles';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SectionSlider } from '../../components/SectionSlider';
import { AddDishCard } from '../../components/AddDishCard';

import BannerImg from '../../assets/foodExplorerBanner.svg';
import { api } from '../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../hooks/search';

export function Home() {
  const { user } = useAuth();
  const { search } = useSearch();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }
    fetchDish();
  }, [search]);

  const filteredDish = dishes.filter((dish) => dish.category === 'main');
  const filteredDissert = dishes.filter((dish) => dish.category === 'dissert');
  const filteredDrinks = dishes.filter((dish) => dish.category === 'drinks');

  return (
    <Container>
      <Header />
      <Content>
        <div className="content-wrapper">
          <Banner>
            <img src={BannerImg} alt="Imagem com frutas e macaron" />
            <div className="title">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>
          {filteredDish.length && (
            <SectionSlider title="Pratos principais">
              {filteredDish.map((dish) => <Card key={String(dish.id)} data={dish} />)}
            </SectionSlider>
          )}

          {filteredDissert.length && (
            <SectionSlider title="Sobremesas">
              {filteredDissert.map((dish) => (
                <Card key={String(dish.id)} data={dish} />
              ))}
            </SectionSlider>
          )}

          {filteredDrinks.length && (
            <SectionSlider title="Bebidas">
              {filteredDrinks.map((dish) => (
                <Card key={String(dish.id)} data={dish} />
              ))}
            </SectionSlider>
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
