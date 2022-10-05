import { createGlobalStyle } from 'styled-components';
import defaultTheme from './theme';

type ThemeParams = { theme: typeof defaultTheme };

export default createGlobalStyle<ThemeParams>`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
    cursor: pointer;
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
