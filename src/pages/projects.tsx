import * as React from 'react'
import { withPagePropsProvider } from '~/hooks'
import { getStaticImageProps } from '~/lib/get-static-image-props'
import { SEO } from '~/ui'
import { getMainLayout } from '~/ui/layouts'
import { ProjectsView } from '~/views'

export async function getStaticProps() {
  const coverImageProps = await getStaticImageProps('/img/cover/projects.webp')

  return {
    props: {
      coverImageProps,
    },
  }
}

const ProjectsPage = withPagePropsProvider(function ProjectsPage() {
  return (
    <React.Fragment>
      <SEO title="Projects" />
      <ProjectsView />
    </React.Fragment>
  )
})

ProjectsPage.getLayout = getMainLayout

export default ProjectsPage
