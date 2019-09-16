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

  ${breakpoints.md`
    justify-content: center;
  `}

  pre {
    padding: 24px;
  }

  ${breakpoints.lg`
    pre {
      padding: 0;
    }
  `}
`
