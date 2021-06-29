import dynamic from 'next/dynamic'
import * as api from '~/lib/api'
import { HighlightJson } from '~/components/highlight-json'
import { Icon } from '~/components/icon'
import { MainLayout } from '~/layouts/main'
import { SEO } from '~/components/seo'
import { OwlImage } from '~/components/owl-image'

const OwlParallax = dynamic(
  () => import('~/components/owl-parallax').then(mod => mod.OwlParallax),
  {
    // eslint-disable-next-line react/display-name
    loading: () => <OwlImage />
  }
)

function getJSON(techProfile) {
  return {
    name: techProfile.name,
    'a.k.a': techProfile.nickname,
    role: techProfile.freelanceRole,
    location: techProfile.location,
    interests: techProfile.interests
  }
}

export default function IndexPage({ techProfile }) {
  return (
    <>
      <SEO techProfile={techProfile} />
      <MainLayout single>
        <OwlParallax />
        <div className="flex flex-col justify-start p-[10vw] md:p-0 md:justify-center w-full z-10">
          <HighlightJson data={getJSON(techProfile)} />
          <nav className="mt-6 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8">
            {['github', 'linkedin', 'twitter'].map(icon => (
              <a
                key={icon}
                href={techProfile[icon]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
                className="text-accent dark:text-accent-dark"
                data-splitbee-event="View Social Network"
                data-splitbee-event-network={icon}
              >
                <Icon name={icon} className="h-8 w-8 md:h-9 md:w-9" />
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
      techProfile
    },
    revalidate: 10
  }
}
