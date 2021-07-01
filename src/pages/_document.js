import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />
          {process.env.NODE_ENV === 'production' && (
            <script async data-api="/_hive" src="/bee.js" />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
