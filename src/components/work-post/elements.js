import styled from 'styled-components'
import * as theme from 'src/theme'

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  width: 100%;
`

export const DateRange = styled.div`
  border: 1px solid blue;
  font-size: 14px;
  margin-right: 16px;
  text-align: center;
  width: 2.5em;
`

export const Content = styled.article`
  border: 1px solid green;
  flex: 1 1;

  > header {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  > p {
    font-size: 14px;
  }
`

export const Tag = styled.span`
  background-color: ${theme.colors.dark};
  border-radius: 4px;
  color: ${theme.colors.white};
  margin: 2px;
  padding: 0 8px;
  user-select: none;
`

export const MetaContainer = styled.div`
  margin-top: 8px;
`

export const TagsContainer = styled.div`
  border: 1px dashed red;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > ${Tag}:not(:last-child) {
    margin-right: 4px;
  }
`
