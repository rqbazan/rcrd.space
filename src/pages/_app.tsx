import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '~/next-seo.config'
import { globalStyles } from '~/ui'
import 'tailwindcss/tailwind.css'

export default function App({ Component: Page, pageProps, router }: AppProps) {
  // @ts-expect-error
  const getLayout = Page.getLayout || ((el: React.ReactElement) => el)

  globalStyles()

  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      {getLayout(
        <AnimatePresence initial={false} exitBeforeEnter>
          <Page key={router.route} {...pageProps} />
        </AnimatePresence>
      )}
    </React.Fragment>
  )
}
