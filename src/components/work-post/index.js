import React from 'react'
import Icon from 'components/icon'
import Tag from 'components/tag'
import Star from 'components/star'
import {
  Container,
  Dates,
  Contents,
  Article,
  Metas,
  Tags,
  Navigation
} from './elements'

export default function WorkPost({
  title,
  startDate,
  endDate,
  tags,
  links,
  featured,
  children
}) {
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
          <header>
            {featured && <Star style={{ marginRight: '0.3rem' }} />}
            {title}
          </header>
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
            {tags.split(',').map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Metas>
      </Contents>
    </Container>
  )
}
