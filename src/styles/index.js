import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700');

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;
