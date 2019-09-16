import styled from 'styled-components'
import breakpoints from 'src/breakpoints'

export const Pre = styled.pre`
  display: block;
  font-size: 12px;
  white-space: pre-wrap;
  width: 100%;

  ${breakpoints.md`
    font-size: 14px;
  `}

  ${breakpoints.lg`
    font-size: 16px;
  `}
`
