import styled from 'styled-components'
import * as theme from 'src/theme'

export const Container = styled.aside`
  background-color: white;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${theme.stacks.menu};

  /* burger icon */
  > div:first-child {
    align-items: center;
    display: flex;
    height: ${theme.sizes.headerHeight}px;
    position: absolute;
    right: ${theme.sizes.headerPadding}px;
  }
`

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > a {
    font-size: 24px;
    font-weight: bold;
  }

  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`
