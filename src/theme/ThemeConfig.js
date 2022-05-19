import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    skillsetCardBackground: '#FFF',
    skillsetCardColor: '#03010D',
    text: '#03010D'
};

export const darkTheme = {
    body: '#03010D',
    skillsetCardBackground: '#1C182F',
    skillsetCardColor: '#FFF',
    text: '#FFF'
};

export const GlobalStyles = createGlobalStyle`
  body, a, button {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }
  
  article, li {
    background: ${({theme}) => theme.skillsetCardBackground};
    color: ${({theme}) => theme.skillsetCardColor};
  }
`;