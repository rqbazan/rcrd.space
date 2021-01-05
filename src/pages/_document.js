import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  static getInitialProps = NextDocument.getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head />
        <script async src="https://cdn.splitbee.io/sb.js" />
        <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
