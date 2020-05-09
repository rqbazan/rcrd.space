import React from 'react'
import data from 'src/data.json'
import HighlightJson from '~/components/highlight-json'
import Icon from '~/components/icon'
import MainLayout from '~/layouts/main'
import SEO from '~/components/seo'
import styles from './styles.module.css'

export default function IndexPage() {
  const { profile, socialLinks } = data

  return (
    <>
      <SEO />
      <MainLayout className={styles.layout}>
        <div className={styles.coverage}>
          <picture>
            <source
              srcSet="https://res.cloudinary.com/dpwoyjb1f/image/upload/v1578363102/me/night_owl_transparent.webp"
              type="image/webp"
            />
            <source
              srcSet="https://res.cloudinary.com/dpwoyjb1f/image/upload/v1578363102/me/night_owl_transparent.png"
              type="image/png"
            />
            <img
              src="https://res.cloudinary.com/dpwoyjb1f/image/upload/v1578363102/me/night_owl_transparent.png"
              alt="coverage"
            />
          </picture>
        </div>
        <div className="flex flex-col justify-start p-10vw md:p-0 md:justify-center w-full">
          <HighlightJson profile={JSON.stringify(profile, null, 4)} />
          <nav className="mt-6 flex flex-col md:flex-row">
            {Object.keys(socialLinks).map(iconName => (
              <a
                key={socialLinks[iconName]}
                href={socialLinks[iconName]}
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
