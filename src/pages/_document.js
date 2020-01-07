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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              WebFontConfig = {
                google: {
                  families: ['IBM+Plex+Mono:400,500', 'Solway:300&display=swap']
                }
              };

              (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0];
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                  wf.async = true;
                  s.parentNode.insertBefore(wf, s);
              })(document);
            `
          }}
        />
      </Html>
    )
  }
}

export default Document
