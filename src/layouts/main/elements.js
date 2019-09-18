import styled from 'styled-components'
import breakpoints from 'src/breakpoints'
import * as theme from 'src/theme'

export const Header = styled.header`
  align-items: center;
  background-color: ${theme.colors.accent};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px;
  display: flex;
  height: ${theme.sizes.headerHeight}px;
  justify-content: flex-end;
  padding: 0 ${theme.sizes.headerPadding}px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${theme.stacks.header};

  ${breakpoints.md`
    box-shadow: unset;
    background-color: ${theme.colors.dark};
    padding: 0;
  `}
`

export const Content = styled.div`
  display: flex;
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
