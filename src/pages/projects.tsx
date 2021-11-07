import * as React from 'react'

import { MainLayout } from '~/layouts'
import { SEO } from '~/ui'
import { ProjectsView } from '~/views'

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <SEO title="Projects" />
      <ProjectsView />
    </React.Fragment>
  )
}

ProjectsPage.Layout = MainLayout
