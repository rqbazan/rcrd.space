import * as React from 'react'
import { SEO } from '~/ui'
import { getMainLayout } from '~/ui/layouts'
import { UsesView } from '~/views'

export default function UsesPage() {
  return (
    <React.Fragment>
      <SEO title="Uses" />
      <UsesView />
    </React.Fragment>
  )
}

UsesPage.getLayout = getMainLayout
