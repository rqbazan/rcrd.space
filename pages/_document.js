import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage

    function enhanceApp(App) {
      return props => sheet.collectStyles(<App {...props} />)
    }

    ctx.renderPage = () => {
      return originalRenderPage({ enhanceApp })
    }

    try {
      const props = await NextDocument.getInitialProps(ctx)

      return {
        ...props,
        styles: (
          <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-svg-core@1.2.22/styles.min.css"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
