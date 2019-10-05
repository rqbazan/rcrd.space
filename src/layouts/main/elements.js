import styled from 'styled-components'
import breakpoints from 'utils/breakpoints'
import theme from 'src/theme'

export const Header = styled.header`
  align-items: center;
  background-color: ${theme.colors.dark};
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
    padding: 0;

    /* burger button */
    > div[role='button'] {
      display: none;
    }
  `}
`

export const Content = styled.main`
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
  display: none;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: ${theme.breakpoints.md}px;

  ${breakpoints.md`
    display: flex;
  `}

  > a {
    color: ${theme.colors.white};
  }

  > a:last-child {
    margin-left: auto;
  }

  > a:not(:last-child) {
    margin-right: 32px;
  }
`
