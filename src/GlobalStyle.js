import { createGlobalStyle } from 'styled-components';
const Roboto = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@300;400;500;700&display=swap'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family:  ${Roboto}, Sans-Serif;
  }
`
export default GlobalStyle;