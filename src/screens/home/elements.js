import styled from 'styled-components'
import cloudinary from 'src/cloudinary'
import breakpoints from 'src/breakpoints'
import * as theme from 'src/theme'

export const CoverageImg = styled.div`
  background-color: ${theme.colors.dark};
  background-image: url('${cloudinary.lg('hero')}');
  background-position: right -104px bottom -40%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${theme.stacks.coverageImg};

  ${breakpoints.md`
    background-size: unset;
    background-position: right bottom;
  `}
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: inherit;
  padding: 24px;

  ${breakpoints.md`
    justify-content: center;
  `}

  ${breakpoints.lg`
    padding: 0;
  `}
`

export const Navigation = styled.nav`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  > a {
    align-self: flex-start;
  }

  > a:not(:last-child) {
    margin-bottom: 32px;
  }

  ${breakpoints.sm`
    flex-direction: row;

    > a:not(:last-child) {
      margin-bottom: 0;
      margin-right: 32px;
    } 
  `}
`
