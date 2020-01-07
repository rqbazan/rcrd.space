/* eslint react/no-danger: off */
import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as scripts from '~/scripts'

class Document extends NextDocument {
  static getInitialProps = NextDocument.getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          dangerouslySetInnerHTML={{
            __html: scripts.webfont({
              google: {
                families: ['IBM+Plex+Mono:400,500', 'Solway:300&display=swap']
              }
            })
          }}
        />
      </Html>
    )
  }
}

export default Document
