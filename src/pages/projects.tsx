import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { MainLayout } from '~/layouts'
import { ProjectsView } from '~/views'

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <DefaultSeo title="Projects" />
      <ProjectsView />
    </React.Fragment>
  )
}

ProjectsPage.Layout = MainLayout
