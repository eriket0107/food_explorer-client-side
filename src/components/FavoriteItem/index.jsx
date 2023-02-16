import { Container, Img, Wrapper } from "./styles";

import { api } from "../../services/api";
import { useState } from "react";

import { ButtonText } from "../ButtonText";

export function FavoriteItem({data}){
  const [coverDish, setCoverDish] = useState('');

  async function handleFavorite(id) {
    await api.post(`/favorites/${data.id}`);
  }

  useState(()=>{
    setCoverDish(`${api.defaults.baseURL}/files/${data.foodImg}`)
  },[])

  return(
    <Container>
      <Img>
        <img src={coverDish} alt={`Imagem de ${data.title}`} />
      </Img>
      <Wrapper>
        <h2>{data.title}</h2>
        <ButtonText className={'btn-text'} title={'Remover dos favoritos'} onClick={handleFavorite}/>
      </Wrapper>
    </Container>
  )
}
