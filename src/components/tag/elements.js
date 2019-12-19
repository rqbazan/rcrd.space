import styled from 'styled-components'
import breakpoints from 'utils/breakpoints'

export const Container = styled.span`
  background-color: ${props => props.bgColor};
  border-radius: 4px;
  border: 1px solid ${props => props.textColor};
  color: ${props => props.textColor};
  font-size: 12px;
  margin: 2px;
  padding: 0 8px;
  user-select: none;

  ${breakpoints('md')`
    font-size: 14px;
  `}

  ${breakpoints('lg')`
    font-size: 12px;
  `}
`
