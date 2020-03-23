/* eslint react/no-danger: 0 */
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
          <script
            dangerouslySetInnerHTML={{
              __html: scripts.webfont({
                google: {
                  families: ['Solway:300&display=swap']
                }
              })
            }}
          />
        </body>
      </Html>
    )
  }
}

export default Document
