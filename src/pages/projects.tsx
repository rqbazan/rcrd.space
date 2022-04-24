import * as React from 'react'
import { getStaticImageProps } from '~/lib/get-static-image-props'
import { SEO } from '~/ui'
import { getMainLayout } from '~/ui/layouts'
import { ProjectsView } from '~/views'

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <SEO title="Projects" />
      <ProjectsView />
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const coverImageProps = await getStaticImageProps('/img/cover/projects.webp')

  return {
    props: {
      coverImageProps,
    },
  }
}

ProjectsPage.getLayout = getMainLayout
