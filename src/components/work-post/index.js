import React from 'react'
import Icon from 'components/icon'
import Tag from 'components/tag'
import {
  Container,
  Dates,
  Contents,
  Article,
  Metas,
  Tags,
  Navigation
} from './elements'

export default function WorkPost(props) {
  const { title, startDate, endDate, tags, links, children } = props

  return (
    <Container>
      <Dates>
        <span>{endDate}</span>
        {startDate && (
          <>
            <br />
            {'|'}
            <br />
            <span>{startDate}</span>
          </>
        )}
      </Dates>
      <Contents>
        <Article>
          <header>{title}</header>
          {children}
        </Article>
        <Metas>
          <Navigation>
            {Object.keys(links)
              .sort()
              .map(iconName => (
                <a
                  href={links[iconName]}
                  key={links[iconName]}
                  target="__blank"
                  rel="noopener"
                  aria-label={iconName}
                >
                  <Icon size={24} name={iconName} />
                </a>
              ))}
          </Navigation>
          <Tags>
            {tags
              .split(',')
              .sort()
              .map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
          </Tags>
        </Metas>
      </Contents>
    </Container>
  )
}
