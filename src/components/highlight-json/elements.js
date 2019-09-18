import styled from 'styled-components'
import breakpoints from 'src/breakpoints'

export const Pre = styled.pre`
  display: block;
  font-size: 14px;
  white-space: pre-wrap;
  width: 100%;

  ${breakpoints.lg`
    font-size: 16px;
  `}
`
