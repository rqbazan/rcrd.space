import { createGlobalStyle } from 'styled-components'
import theme from 'src/theme'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 100%;
    font-weight: 400;
    font: inherit;
    line-height: 1.6;
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
    font-family: 'IBM Plex Mono', monospace;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: ${theme.colors.dark};
    text-decoration: underline;
  }

  strong {
    font-weight: 500;
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
