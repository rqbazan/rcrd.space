import React from 'react'
import NextApp from 'next/app'
import Router from 'next/router'
import GlobalStyle from 'src/global-style'
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
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
