import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as theme from 'src/theme'
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
  const { title, body, startDate, endDate, tags, links } = props

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
          <p>{body}</p>
        </Article>
        <Metas>
          <Navigation>
            {Object.keys(links).map(iconName => (
              <a
                href={links[iconName]}
                key={links[iconName]}
                target="__blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={theme.icons[iconName]}
                  color={theme.colors.dark}
                  size="2x"
                />
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
