import React from 'react'
import Icon from 'components/icon'
import {
  Container,
  Dates,
  Contents,
  Tag,
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
        {startDate}
        {endDate && (
          <>
            <br />
            {'|'}
            <br />
            {endDate}
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
            {Object.keys(links).map(iconName => (
              <a
                href={links[iconName]}
                key={links[iconName]}
                target="__blank"
                rel="noopener"
              >
                <Icon size={32} name={iconName} />
              </a>
            ))}
          </Navigation>
          <Tags>
            {tags.split(',').map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Metas>
      </Contents>
    </Container>
  )
}
