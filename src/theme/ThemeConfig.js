import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#03010D'
}

export const darkTheme = {
    body: '#03010D',
    text: '#FFF'
}

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`