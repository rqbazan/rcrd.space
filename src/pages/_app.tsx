import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { defaultSEO } from '~/next-seo.config'
import { globalStyles } from '~/ui'

import 'tailwindcss/tailwind.css'

export default function App({ Component: Page, pageProps, router }: AppProps) {
  // @ts-expect-error
  const Layout = Page.Layout || React.Fragment

  globalStyles()

  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Layout>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Page key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </React.Fragment>
  )
}
