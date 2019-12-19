import styled from 'styled-components'
import breakpoints from 'utils/breakpoints'
import theme from 'src/theme'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Dates = styled.div`
  color: ${theme.colors.body};
  font-size: 12px;
  margin-right: 16px;
  text-align: center;
  width: 2.5em;

  ${breakpoints('lg')`
    padding-top: 4px; /* visual perception */
    width: 5.2em;
  `}
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${breakpoints('lg')`
    flex-direction: row;
  `}
`

export const Article = styled.article`
  flex: 1;
  font-size: 14px;

  > header {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  > p,
  div {
    color: ${theme.colors.body};
  }

  ${breakpoints('lg')`
    margin-right: 24px;
  `}
`

export const Tag = styled.span`
  background-color: ${theme.colors.dark};
  border-radius: 4px;
  color: ${theme.colors.white};
  margin: 2px;
  padding: 0 8px;
  user-select: none;
  font-size: 12px;

  ${breakpoints('md')`
    font-size: 14px;
  `}

  ${breakpoints('lg')`
    font-size: 12px;
  `}
`

export const Metas = styled.div`
  margin-top: 8px;

  ${breakpoints('lg')`
    margin-top: 0;
    width: 10em;
  `}
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > ${Tag}:not(:last-child) {
    margin-right: 4px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  width: 100%;

  > a {
    padding: 8px;
  }

  ${breakpoints('lg')`
    margin: 8px 0;

    > a {
      padding: 0;

      :not(:last-child) {
        margin-right: 8px;
      }
    } 
  `}
`
