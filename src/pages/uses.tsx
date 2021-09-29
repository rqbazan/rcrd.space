import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { MainLayout } from '~/layouts'
import { UsesView } from '~/views'

export default function UsesPage() {
  return (
    <React.Fragment>
      <DefaultSeo title="Uses" />
      <UsesView />
    </React.Fragment>
  )
}

UsesPage.Layout = MainLayout
