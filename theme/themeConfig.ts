import {createGlobalStyle, DefaultTheme} from "styled-components";

export const lightTheme: DefaultTheme = {
  bodyColor: '#FFF',
  backgroundColor: '#FFF',
  cardColor: '#03010D',
  textColor: '#03010D'
};

export const darkTheme: DefaultTheme = {
  bodyColor: '#03010D',
  backgroundColor: '#1C182F',
  cardColor: '#FFF',
  textColor: '#FFF'
};

export const GlobalStyles = createGlobalStyle`
  body, button {
    background: ${({theme}) => theme.bodyColor};
    color: ${({theme}) => theme.textColor};
  }
  
  article, li, a {
    background: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.cardColor};
  }
`;