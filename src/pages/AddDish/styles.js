import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 3.2rem;
  padding:0 1rem;
  
  section{
    margin-bottom: 2.4rem;
  }
  @media (min-width:1200px) {
    height: 512px;
    width: 1120px;

    display: flex;
    flex-direction: column;
    }
  > section{
    margin-bottom: 2rem;
  }

  @media (min-width:1200px) {
  .wrapper-line{
      display: flex;
      justify-content: space-between;
      gap: 3.2rem;

      > section:nth-child(2){
        width: 46.3rem;
      }

      > section:last-child{
        width: 36.4rem;
      }
    }

    .wrapper-line:nth-child(2){
      margin: 3.2rem 0;
      > section:first-child{
        width: 100%;
      }
      > section:last-child{
        width: 36.4rem;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  
  .title-wrapper{
    padding: 0 1rem;
    > h1{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      color: ${({theme}) => theme.colors.GRAY_100};
      margin-bottom: 3.2rem;
    }
    .back-btn{
      justify-content: start;
      font-size: 2.4rem;
      margin: 2.4rem 0;
      display: flex;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      @media (max-width: 700px) {
      margin: 0 0 1rem;
        
      }
    }

  }

  .add-btn{
    display: flex;
    justify-content: flex-end;
    > button{
      display: flex;
      margin-top: 2.4rem;
      background-color: ${({theme})=> theme.colors.GRAYBUTTON_BG};
      width: 357px;
    }
  } 

  label{
    width: 22.9rem;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    color: white;

    border: 1px solid white;
    border-radius: .5rem;
    padding: 1rem 0;
    cursor: pointer;

    #img-input{
    display: none;
    }
  } 


  margin: 12.8rem auto 0;

  .ingredients-wrapper{
    display: flex; 
    gap: 2rem;
    width: 100%;
    border-radius: .5rem;
    border: 1px solid white;
    padding: .8rem;
  }

@media (max-width:1200px) {
  label{
    width: 100%;
  }
}
`