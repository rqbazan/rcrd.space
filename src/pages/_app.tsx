import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { defaultSEO } from '~/next-seo.config'
import { globalStyles } from '~/ui'

import 'tailwindcss/tailwind.css'

export default function App({ Component: Page, pageProps }) {
  globalStyles()

  const pageElement = (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Page {...pageProps} />
    </React.Fragment>
  )

  if (!Page.Layout) {
    return pageElement
  }

  return <Page.Layout>{pageElement}</Page.Layout>
}
