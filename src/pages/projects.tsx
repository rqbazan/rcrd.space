import * as React from 'react'
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

ProjectsPage.getLayout = getMainLayout
