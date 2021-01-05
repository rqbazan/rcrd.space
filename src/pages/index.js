import React from 'react'
import dynamic from 'next/dynamic'
import * as api from '~/lib/api'
import HighlightJson from '~/components/highlight-json'
import Icon from '~/components/icon'
import MainLayout from '~/layouts/main'
import SEO from '~/components/seo'
import OwlImage from '~/components/owl-image'

const OwlParallax = dynamic(() => import('~/components/owl-parallax'), {
  loading: () => <OwlImage />
})

export default function IndexPage({ profile, socialNetworks }) {
  return (
    <>
      <SEO />
      <MainLayout>
        <OwlParallax />
        <div className="flex flex-col justify-start p-10vw md:p-0 md:justify-center w-full z-10">
          <HighlightJson data={profile} />
          <nav className="mt-6 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8">
            {Object.keys(socialNetworks).map(key => (
              <a
                key={key}
                href={socialNetworks[key]}
                target="__blank"
                rel="noopener"
                aria-label={key}
                className="text-accent dark:text-accent-dark"
              >
                <Icon name={key} className="h-8 w-8 md:h-10 md:w-10" />
              </a>
            ))}
          </nav>
        </div>
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const techProfile = await api.getTechProfile()

  return {
    props: {
      ...techProfile
    },
    revalidate: 10
  }
}
