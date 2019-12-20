import React from 'react'
import detectMobile from 'is-mobile'
import data from 'src/data.json'
import HighlightJson from '~/components/highlight-json'
import Icon from '~/components/icon'
import MainLayout from '~/layouts/main'
import SEO from '~/components/seo'
import './styles.css'

const curlyBracketsIdentation = /^[{}]?\s{0,5}/gm

export default function IndexPage({ fromMobile, profile }) {
  return (
    <>
      <SEO />
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
                <Icon name={iconName} size={32} className="text-selection" />
              </a>
            ))}
          </nav>
        </div>
      </MainLayout>
    </>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const fromMobile = detectMobile({ ua: req, tablet: true })

  const desktopCode = JSON.stringify(data.profile, null, 4)
  const mobileCode = desktopCode.replace(curlyBracketsIdentation, '').trim()

  return {
    fromMobile,
    profile: {
      desktopCode,
      mobileCode,
      socialLinks: data.socialLinks
    }
  }
}
