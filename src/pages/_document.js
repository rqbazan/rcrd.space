import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps = NextDocument.getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head />
        <script async data-api="/_hive" src="/bee.js" />
        <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
