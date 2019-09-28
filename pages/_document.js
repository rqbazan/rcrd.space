import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as theme from 'src/theme'
import data from 'src/data.json'

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
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.colors.dark} />
          <meta name="description" content={`I'm a ${data.profile.role}`} />
          <meta
            name="keywords"
            content="javascript developer, full stack developer, web developer"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dpwoyjb1f/image/upload/h_1200,w_1200,c_crop/me/night_owl.jpg"
          />
          <meta property="og:url" content="https://sxntixgo.codes" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://sxntixgo.codes" />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
            rel="stylesheet"
            type="text/css"
            media="screen"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
