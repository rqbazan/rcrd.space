import * as React from 'react'

import { getLayout } from '~/layouts'
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

UsesPage.getLayout = getLayout
