import { FiUpload } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, Content } from './styles'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Selection } from '../../components/Selection'
import { ButtonText } from '../../components/ButtonText'
import { IngridientTag } from '../../components/IngridientTag'
import { TextArea } from '../../components/TextArea'

import previousArrow from '../../assets/previous.svg'
import placeholder from '../../assets/placeholder.svg'

export function EditDish({}) {
  const navigate = useNavigate()
  const params = useParams()

  const [dish, setDish] = useState({})
  const [dishTitle, setDishTitle] = useState('')
  const [dishCategory, setDishCategory] = useState('')
  const [dishPrice, setDishPrice] = useState('')
  const [dishDescrition, setDishDescrition] = useState('')
  const [dishIngredients, setDishIngredients] = useState([])
  const [newDishIngredient, setNewDishIngredient] = useState('')

  const [dishCover, setDishCover] = useState(null)
  const [dishCoverFile, setDishCoverFile] = useState('')
  const [dishCoverFileName, setDishCoverFileName] = useState('')

  function handleAddIngredient() {
    if (!newDishIngredient) return alert('Insira um ingrediente')
    setDishIngredients((prev) => [...prev, newDishIngredient])
    setNewDishIngredient('')
  }

  function handleRemoveIngredient(toDelete) {
    setDishIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== toDelete),
    )
  }

  function handleNavigationBack() {
    navigate(-1)
  }
  function handleImagePreview(event) {
    const filePath = event.target.files[0]
    setDishCoverFile(filePath)
    setDishCoverFileName(filePath.name)
    const imgNamePreview = URL.createObjectURL(filePath)
    setDishCover(imgNamePreview)
  }

  async function handleEditDishCover() {
    if (!dishCoverFile) return
    const fileUploadForm = new FormData()
    fileUploadForm.append('foodImg', dishCoverFile)
    await api.patch(`/dishes/${params.id}/img`, fileUploadForm)
  }

  async function handleEditDish() {
    if (!dishIngredients) return alert('Insira ingredientes ao prato.')
    try {
      await api.put(`/dishes/${params.id}`, {
        title: dishTitle,
        category: dishCategory,
        price: dishPrice,
        description: dishDescrition,
        ingredients: dishIngredients,
      })
      handleEditDishCover()
      alert('Prato atualizado com sucesso.')
      navigate('/')
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message)
      } else {
        alert('Error.')
      }
    }
  }

  async function handleDeleteDish(dishId) {
    const toDelete = confirm('Deseja excluír o prato?')

    if (toDelete) {
      alert('Prato excluído com sucesso!')
      await api.delete(`/dishes/${dishId}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        const { data: dish } = response
        const ingredientName = dish.ingredients.map(({ name }) => name)

        setDish(dish)
        setDishTitle(dish.title)
        setDishCategory(dish.category)
        setDishPrice(dish.price)
        setDishDescrition(dish.description)
        setDishIngredients(ingredientName)
      } catch (e) {
        if (e.response) {
          alert(e.response.data.message)
        }
      }
    }
    fetchDish()
  }, [])

  const isCover = dishCoverFileName || 'Salvar imagem'
  return (
    <Container>
      <Content>
        <div className="title-wrapper">
          <ButtonText
            title="Voltar"
            onClick={handleNavigationBack}
            src={previousArrow}
            className="back-btn"
          />
          <h1>Editar Prato</h1>
        </div>
        <Form>
          <div className="wrapper-line">
            <Section title="Imagem do prato">
              <label htmlFor="img-input">
                <FiUpload />
                <span>{isCover}</span>
                <input
                  id="img-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImagePreview}
                />
              </label>
            </Section>
            <Section title="Nome">
              <Input
                placeholder="Ex.: Salada Ceasar"
                value={dishTitle}
                onChange={(e) => setDishTitle(e.target.value)}
              />
            </Section>
            <Section title="Categoria">
              <Selection onChange={(e) => setDishCategory(e.target.value)} />
            </Section>
          </div>
          <div className="wrapper-line">
            <Section title="Ingredientes">
              <div className="ingredients-wrapper">
                {dishIngredients &&
                  dishIngredients.map((ingredient, index) => (
                    <IngridientTag
                      key={index}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                <IngridientTag
                  isNew
                  placeholder="Adicionar"
                  onClick={handleAddIngredient}
                  value={newDishIngredient}
                  onChange={(e) => setNewDishIngredient(e.target.value)}
                />
              </div>
            </Section>
            <Section title="Preço">
              <Input
                placeholder="40.00"
                value={dishPrice}
                onChange={(e) => setDishPrice(e.target.value)}
              />
            </Section>
          </div>
          <Section title="Descrição">
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={dishDescrition}
              onChange={(e) => setDishDescrition(e.target.value)}
            />
          </Section>
        </Form>
        <div className="btns">
          <Button
            title="Excluir prato"
            onClick={() => handleDeleteDish(dish.id)}
          />
          <Button title="Salvar Alterações" onClick={() => handleEditDish()} />
        </div>
      </Content>
    </Container>
  )
}
