import React from 'react'
import {
  Container,
  DateRange,
  Content,
  Tag,
  MetaContainer,
  TagsContainer
} from './elements'

export default function WorkPost(props) {
  const { title, body, startDate, endDate, tags } = props

  return (
    <Container>
      <DateRange>
        {startDate}
        {endDate && (
          <>
            <br />
            {'|'}
            <br />
            {endDate}
          </>
        )}
      </DateRange>
      <Content>
        <header>{title}</header>
        <p>{body}</p>
        <MetaContainer>
          <TagsContainer>
            {tags.split(',').map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
        </MetaContainer>
      </Content>
    </Container>
  )
}
