import styled from 'styled-components'
import breakpoints from 'utils/breakpoints'

export const Pre = styled.pre`
  display: block;
  font-size: 14px;
  line-height: 1.8;
  white-space: pre-wrap;
  width: 100%;

  ${breakpoints('lg')`
    font-size: 16px;
  `}
`
