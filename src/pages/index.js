import React from 'react'
import dynamic from 'next/dynamic'
import data from '~/data.json'
import HighlightJson from '~/components/highlight-json'
import Icon from '~/components/icon'
import MainLayout from '~/layouts/main'
import SEO from '~/components/seo'
import OwlImage from '~/components/owl-image'

const OwlParallax = dynamic(() => import('~/components/owl-parallax'), {
  loading: () => <OwlImage />
})

export default function IndexPage() {
  const { profile, socialLinks } = data

  return (
    <>
      <SEO />
      <MainLayout>
        <OwlParallax />
        <div className="flex flex-col justify-start p-10vw md:p-0 md:justify-center w-full z-10">
          <HighlightJson profile={JSON.stringify(profile, null, 4)} />
          <nav className="mt-6 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {Object.keys(socialLinks).map(iconName => (
              <a
                key={socialLinks[iconName]}
                href={socialLinks[iconName]}
                target="__blank"
                rel="noopener"
                aria-label={iconName}
                className="self-start md:transform md:ease-in-out md:duration-300 hover:-translate-y-2 text-selection"
              >
                <Icon name={iconName} size={32} />
              </a>
            ))}
          </nav>
        </div>
      </MainLayout>
    </>
  )
}
