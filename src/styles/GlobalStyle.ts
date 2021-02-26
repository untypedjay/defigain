import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-accent: #AD09D7;
    --clr-primary: #F4F3F6;
    --clr-secondary: #FFFFFF;
    --clr-text: #363636;
    --clr-disabled: #9C9C9C;
    
    --clr-btc: #F7931A;
    --clr-dfi: #FF01AF;
    --clr-eth: #637EEA;
    --clr-ltc: #345D9C;
    --clr-usdt: #27A27A;
    --clr-doge: #C2A632;
    
    --br-card: 8px;
    --br-button: 4px;
    
    --box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%);
  }
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    paddding: 0;
  }
  
  html,
  body,
  #root {
    height: 100%;
  }
`;