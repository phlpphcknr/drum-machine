import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Courier New",serif;
    background-color: var(--primary-color-bright);
    --primary-color-bright: #FFBF69;
    --primary-color-dark: #FF9F1C;
    --black: #000814;
    --secondary-color-bright: #CBF3F0;
    --secondary-color-dark: #2EC4B6;
    --opacity-hover:0.7;
    
    @media (orientation: landscape) {
    --button-side-length: 15vh;
    --display-width: 45vh;
    }
   @media (orientation: portrait) {
    --button-side-length: 20vw;
    --display-width: 60vw;
    }
    
  }
  
  button{
    font-size: 24px;
    font-family: inherit;
    font-weight: bold;
    margin: 0px 0px 0px 0px;
    padding: 8px;
    color: var(--black);
    background-color: var(--secondary-color-dark);
  }
  
  button:focus{
    outline: 0;
  }

`
