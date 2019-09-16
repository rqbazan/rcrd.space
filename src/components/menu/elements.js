import styled from 'styled-components'
import * as theme from 'src/theme'

export const Container = styled.nav`
  background-color: white;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${theme.stacks.menu};

  > div[role='button'] {
    align-items: center;
    display: flex;
    height: ${theme.sizes.headerHeight}px;
    position: absolute;
    right: ${theme.sizes.headerPadding}px;
  }
`
