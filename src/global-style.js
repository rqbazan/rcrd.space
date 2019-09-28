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

  *:focus {
    outline: none;
  }

  body {
    background-color: ${theme.colors.bgColor};
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: ${theme.colors.dark};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background-color: ${theme.colors.selection};
    height: 2px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${theme.stacks.nprogress};
  }
`

export default GlobalStyle
