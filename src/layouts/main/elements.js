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

  ${breakpoints.md`
    background-color: ${theme.colors.dark};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 16px 0px;
  `}
`

export const Content = styled.div`
  display: flex;
  height: calc(100vh - ${theme.sizes.headerHeight}px);
  margin-top: ${theme.sizes.headerHeight}px;
  width: 100%;

  ${breakpoints.md`
    margin-left: auto;
    margin-right: auto;
    width: ${theme.breakpoints.md}px;
  `}
`

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  width: ${theme.breakpoints.md}px;

  > a {
    color: ${theme.colors.white};
  }

  > a:not(:last-child) {
    margin-right: 24px;
  }

  > a:last-child {
    margin-left: auto;
  }
`
