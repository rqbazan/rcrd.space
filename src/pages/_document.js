/* eslint react/no-danger: off */

import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

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
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `WebFont.load({ google: { families: ['IBM Plex Mono:400,500&display=swap', 'Solway:300&display=swap'] }});`
          }}
        />
      </Html>
    )
  }
}

export default Document
