import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-tap-highlight-color: transparent;
    
  }
  
  html{
    font-size: 62.5%
  }

  body {
    background-color: ${({ theme }) => theme.colors.BG_BODY};

    font-family: 'Roboto', sans-serif;

    *::-webkit-scrollbar {
        width: 22px;
        height: 22px;
        border-radius: 9999px;
    }

    *::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        width: 6px;
        background-color: transparent;
        border-radius: 80px;
        box-shadow: inset 0 0 0px 6px #0099ff;
        border: solid 10px transparent;
    }
  }


  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.8);
  }

  textarea:focus, input:focus, select:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;