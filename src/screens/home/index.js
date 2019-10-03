import React from 'react'
import HighlightJson from 'components/highlight-json'
import Icon from 'components/icon'
import MainLayout from 'layouts/main'
import theme from 'src/theme'
import { CoverageImg, InnerContainer, Navigation } from './elements'

export default function HomeScreen({ fromMobile, profile }) {
  return (
    <MainLayout
      style={{ minHeight: `calc(100vh - ${theme.sizes.headerHeight}px)` }}
    >
      <CoverageImg />
      <InnerContainer>
        <HighlightJson
          fromMobile={fromMobile}
          mobileCode={profile.mobileCode}
          desktopCode={profile.desktopCode}
        />
        <Navigation>
          {Object.keys(profile.socialLinks).map(iconName => (
            <a
              key={profile.socialLinks[iconName]}
              href={profile.socialLinks[iconName]}
              target="__blank"
              rel="noopener"
              aria-label={iconName}
            >
              <Icon name={iconName} color={theme.colors.selection} size={32} />
            </a>
          ))}
        </Navigation>
      </InnerContainer>
    </MainLayout>
  )
}
