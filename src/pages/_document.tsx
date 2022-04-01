import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { getJsText } from '@rqbazan/set-initial-color-mode'
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
          <script id="set-initial-color-mode" dangerouslySetInnerHTML={{ __html: getJsText() }} />
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
