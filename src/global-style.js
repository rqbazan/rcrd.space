import { createGlobalStyle } from 'styled-components'
import * as theme from 'src/theme'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    margin: 0;
    min-height: 0;
    min-width: 0;
    padding: 0;
    vertical-align: baseline;
  }

  ::selection {
    background-color: ${theme.colors.selection};
    color: black;
  }

  body {
    font-family: 'Space Mono', monospace;
  }

  a {
    color: ${theme.colors.dark};
    text-decoration: none;
  }
`

export default GlobalStyle
