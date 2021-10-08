/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-document-import-in-page */
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import env from '~/env'
import { getCssText } from '~/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link
            rel="preload"
            href="/fonts/ibm-plex-sans-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <script dangerouslySetInnerHTML={{ __html: process.env.SET_INITIAL_COLOR_MODE_SCRIPT }} />
          {env.PROD && <script async data-api="/_hive" src="/bee.js" />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
