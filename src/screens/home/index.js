import React from 'react'
import HighlightJson from 'components/highlight-json'
import Icon from 'components/icon'
import MainLayout from 'layouts/main'
import theme from 'src/theme'
import './styles.css'

export default function HomeScreen({ fromMobile, profile }) {
  return (
    <MainLayout>
      <div className="home__coverage-img" />
      <div className="flex flex-col justify-start p-10vw md:p-0 md:justify-center w-full">
        <HighlightJson
          fromMobile={fromMobile}
          mobileCode={profile.mobileCode}
          desktopCode={profile.desktopCode}
        />
        <nav className="mt-6 flex flex-col md:flex-row">
          {Object.keys(profile.socialLinks).map(iconName => (
            <a
              key={profile.socialLinks[iconName]}
              href={profile.socialLinks[iconName]}
              target="__blank"
              rel="noopener"
              aria-label={iconName}
              className="self-start mb-8 md:mb-0 md:mr-8 last:mb-0"
            >
              <Icon name={iconName} color={theme.colors.selection} size={32} />
            </a>
          ))}
        </nav>
      </div>
    </MainLayout>
  )
}
