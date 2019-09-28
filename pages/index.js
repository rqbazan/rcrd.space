/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react'
import Head from 'next/head'
import HomeScreen from 'screens/home'
import MobileProvider from 'components/mobile-provider'

export default function IndexPage(props) {
  const { fromMobile } = props

  return (
    <MobileProvider fromMobile={fromMobile}>
      <Head>
        <title>👨🏻‍💻 Ricardo Q. Bazan (@rqbazan)</title>
        <link rel="canonical" href="https://sxntixgo.codes" />
      </Head>
      <HomeScreen />
    </MobileProvider>
  )
}

if (typeof window === 'undefined') {
  IndexPage.getInitialProps = async ctx => {
    const isMobileOptions = { ua: ctx.req, tablet: true }

    return {
      // eslint-disable-next-line global-require
      fromMobile: require('is-mobile')(isMobileOptions)
    }
  }
}
