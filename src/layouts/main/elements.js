import styled from 'styled-components'
import breakpoints from 'src/breakpoints'
import * as theme from 'src/theme'

export const Header = styled.header`
  align-items: center;
  background-color: ${theme.colors.accent};
  display: flex;
  height: ${theme.sizes.headerHeight}px;
  justify-content: flex-end;
  padding: 0 ${theme.sizes.headerPadding}px;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  height: calc(100vh - ${theme.sizes.headerHeight}px);
  margin-top: ${theme.sizes.headerHeight}px;
  width: 100%;

  ${breakpoints.md`
    height: 100vh;
    margin: auto;
    width: ${theme.breakpoints.md}px;
  `}
`
