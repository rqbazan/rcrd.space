import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import detectMobile from 'is-mobile'
import HomeScreen from 'screens/home'
import getBaseAPIUrl from 'utils/get-base-api-url'

export default function IndexPage({ fromMobile, profile }) {
  return (
    <>
      <Head>
        <title>Ricardo Q. Bazan (@rqbazan)</title>
        <link rel="canonical" href="https://sxntixgo.codes" />
      </Head>
      <HomeScreen fromMobile={fromMobile} profile={profile} />
    </>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const baseUrl = getBaseAPIUrl(req)

  const fromMobile = detectMobile({ ua: req, tablet: true })

  const response = await fetch(`${baseUrl}/profile`)
  const { profile } = await response.json()

  return { profile, fromMobile }
}
