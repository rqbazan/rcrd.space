import { createGlobalStyle } from 'styled-components'
import breakpoints from 'src/breakpoints'
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
  }

  a {
    color: ${theme.colors.dark};
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  ${breakpoints.md`
    a { 
      color: ${theme.colors.dark};
      text-decoration: none;
    }
  `}

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background-color: ${theme.colors.white};
    height: 2px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${theme.stacks.nprogress};

    ${breakpoints.md`
      background-color: ${theme.colors.selection};
    `}
  }
`

export default GlobalStyle
