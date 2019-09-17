import NextApp from 'next/app'
import Router from 'next/router'
import GlobalStyle from 'src/global-style'
import MobileProvider from 'components/mobile-provider'
import { config } from '@fortawesome/fontawesome-svg-core'
import NProgress from 'nprogress'

config.autoAddCss = false
NProgress.configure({
  template: '<div class="bar" role="bar"></div>'
})
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

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
