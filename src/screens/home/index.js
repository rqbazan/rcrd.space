import React from 'react'
import HighlightJson from 'components/highlight-json'
import Icon from 'components/icon'
import MainLayout from 'layouts/main'
import * as theme from 'src/theme'
import data from 'src/data.json'
import { CoverageImg, Main, Navigation } from './elements'

export default function HomeScreen() {
  return (
    <MainLayout
      style={{ minHeight: `calc(100vh - ${theme.sizes.headerHeight}px)` }}
    >
      <CoverageImg />
      <Main>
        <HighlightJson />
        <Navigation>
          {Object.keys(data.socialLinks).map(iconName => (
            <a
              key={data.socialLinks[iconName]}
              href={data.socialLinks[iconName]}
              target="__blank"
              rel="noopener"
              aria-label={iconName}
            >
              <Icon name={iconName} color={theme.colors.selection} size={32} />
            </a>
          ))}
        </Navigation>
      </Main>
    </MainLayout>
  )
}
