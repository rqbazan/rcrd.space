import styled, { css } from 'styled-components'
import breakpoints from 'utils/breakpoints'
import theme from 'src/theme'

export const CoverageImg = styled.div`
  background-color: ${theme.colors.dark};
  background-image: url('//res.cloudinary.com/dpwoyjb1f/image/upload/q_auto,f_png,o_50,w_1024,h_680/w_500,h_680,c_crop,y_0,x_350/me/night_owl.jpg');
  background-position: right -4rem bottom -40%;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${theme.stacks.coverageImg};

  ${breakpoints('md')`
    background-position: right bottom;
  `}
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: inherit;
  padding: 10vw;

  ${breakpoints('md')`
    justify-content: center;
    padding: 64px;
  `}

  ${breakpoints('lg')`
    padding: 0;
  `}
`

const navNonMobileStyle = css`
  flex-direction: row;

  > a:not(:last-child) {
    margin-bottom: 0;
    margin-right: 32px;
  }
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

  ${breakpoints('md')`
    ${navNonMobileStyle}
  `}

  @media (orientation: landscape) {
    ${navNonMobileStyle}
  }
`
