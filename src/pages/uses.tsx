import * as React from 'react'

import { MainLayout } from '~/layouts'
import { SEO } from '~/ui'
import { UsesView } from '~/views'

export default function UsesPage() {
  return (
    <React.Fragment>
      <SEO title="Uses" />
      <UsesView />
    </React.Fragment>
  )
}

UsesPage.Layout = MainLayout
