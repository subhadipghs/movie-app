import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', --apple-system, 'Segou UI', sans-serif;
    -webkit-font-smoothing: antialias;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --white: ${props => props.theme.colors.whiteColor};
    --black: ${props => props.theme.colors.blackColor};
    --primary: ${props => props.theme.colors.darkGray};
    --danger: ${props => props.theme.colors.danger};
    --light-gray: ${props => props.theme.colors.lightGray};
  }

  html {
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
  }

  a, button, input[type="submit"] {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  code {
    font-family: "Monaco", "Consolas", "Courier Prime", "Source Code Pro", monospace;
  }

`
export default GlobalStyle
