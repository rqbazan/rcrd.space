import NextApp from 'next/app'
import GlobalStyle from 'src/global-style'
import MobileProvider from 'components/mobile-provider'

export default class App extends NextApp {
  render() {
    const { Component, pageProps, fromMobile } = this.props

    return (
      <MobileProvider fromMobile={fromMobile}>
        <GlobalStyle />
        <Component {...pageProps} />
      </MobileProvider>
    )
  }
}

if (typeof window === 'undefined') {
  App.getInitialProps = async ({ ctx }) => {
    const isMobileOptions = { ua: ctx.req, tablet: true }

    return {
      // eslint-disable-next-line global-require
      fromMobile: require('is-mobile')(isMobileOptions)
    }
  }
}
