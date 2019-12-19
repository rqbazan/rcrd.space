import styled from 'styled-components'
import breakpoints from 'utils/breakpoints'

export const WorkPostsContainer = styled.div`
  margin: 32px 0;
  padding: 0 24px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }

  ${breakpoints('md')`
    margin: 24px 0;
    padding: 0;
  `}
`
