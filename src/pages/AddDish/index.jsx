import { Container, Form, Content } from './styles';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Selection } from '../../components/Selection';
import { ButtonText } from '../../components/ButtonText';
import { IngridientTag } from '../../components/IngridientTag';
import { TextArea } from '../../components/TextArea';

import previousArrow from '../../assets/previous.svg';

import { FiUpload } from 'react-icons/fi';

import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export const AddDish = ({}) => {
  const navigate = useNavigate();

  const [dishTitle, setDishTitle] = useState('');
  const [dishCategory, setDishCategory] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishIngredients, setDishIngredients] = useState([]);
  const [newDishIngredient, setNewDishIngredient] = useState('');

  const [dishCover, setDishCover] = useState(null);
  const [dishCoverFile, setDishCoverFile] = useState('');
  const [dishCoverFileName, setDishCoverFileName] = useState('');

  function handleAddIngredient() {
    if (!newDishIngredient) return alert('Insira um ingrediente');

    setDishIngredients((prev) => [...prev, newDishIngredient]);
    setNewDishIngredient('');
  }

  function handleRemoveIngredient(toDelete) {
    setDishIngredients((prev) => prev.filter((ingredient) => ingredient !== toDelete));
  }

  function handleNavigationBack() {
    navigate(-1);
  }

  function handleImagePreview(event) {
    const filePath = event.target.files[0];
    setDishCoverFile(filePath);
    setDishCoverFileName(filePath.name);
    const imgNamePreview = URL.createObjectURL(filePath);
    setDishCover(imgNamePreview);
  }

  async function handleNewDish() {
    if (!dishTitle || !dishDescription || !dishIngredients || !dishPrice)
      return alert('Preencha todos os campos para criar um prato.');
    if (!dishCategory) return alert('Selecione uma categoria para o prato.');
    const price = Number(dishPrice).toFixed(2);

    const fileUploadForm = new FormData();
    fileUploadForm.append('title', dishTitle);
    fileUploadForm.append('category', dishCategory);
    fileUploadForm.append('price', price);
    fileUploadForm.append('description', dishDescription);
    fileUploadForm.append('foodImg', dishCoverFile);

    dishIngredients.map((ingredient) => {
      fileUploadForm.append('ingredients', ingredient);
    });
    await api.post('/dishes', fileUploadForm);
    navigate('/')
    return alert('Prato cadastrado com sucesso.');
  }

  const isCover = dishCoverFileName ? dishCoverFileName : 'Salvar imagem';

  return (
    <Container>
      <Header />
      <Content>
        <div className="title-wrapper">
          <ButtonText title={'Voltar'} onClick={handleNavigationBack} src={previousArrow} className={'back-btn'} />
          <h1>Adicionar Prato</h1>
        </div>
        <Form>
          <div className="wrapper-line">
            <Section title={'Imagem do prato'}>
              <label htmlFor="img-input">
                <FiUpload />
                <span>{isCover}</span>
                <input id="img-input" type={'file'} accept="image/*" onChange={handleImagePreview} />
              </label>
            </Section>
            <Section title={'Nome'}>
              <Input placeholder={'Ex.: Salada Ceasar'} onChange={(e) => setDishTitle(e.target.value)} />
            </Section>
            <Section title={'Categoria'}>
              <Selection onChange={(e) => setDishCategory(e.target.value)} />
            </Section>
          </div>
          <div className="wrapper-line">
            <Section title={'Ingredientes'}>
              <div className="ingredients-wrapper">
                {dishIngredients.map((ingredient, index) => (
                  <IngridientTag key={index} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
                ))}

                <IngridientTag
                  isNew
                  placeholder={'Adicionar'}
                  onClick={handleAddIngredient}
                  value={newDishIngredient}
                  onChange={(e) => setNewDishIngredient(e.target.value)}
                />
              </div>
            </Section>
            <Section title={'Preço'}>
              <Input placeholder={'R$ 40,00'} onChange={(e) => setDishPrice(e.target.value)} />
            </Section>
          </div>
          <Section title={'Descrição'}>
            <TextArea
              placeholder={'Fale brevemente sobre o prato, seus ingredientes e composição'}
              onChange={(e) => setDishDescription(e.target.value)}
            />
          </Section>
        </Form>
        <div className={'add-btn'}>
          <Button title={'Adicionar prato'} onClick={handleNewDish} />
        </div>
      </Content>
      <Footer />
    </Container>
  );
};
