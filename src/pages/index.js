import React from 'react'
import Head from 'next/head'
import detectMobile from 'is-mobile'
import HomeScreen from 'screens/home'
import data from 'src/data.json'

const curlyBracketsIdentation = /^[{}]?\s{0,5}/gm

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
  const fromMobile = detectMobile({ ua: req, tablet: true })

  const desktopCode = JSON.stringify(data.profile, null, 4)
  const mobileCode = desktopCode.replace(curlyBracketsIdentation, '').trim()

  return {
    fromMobile,
    profile: {
      desktopCode,
      mobileCode,
      socialLinks: data.socialLinks
    }
  }
}
