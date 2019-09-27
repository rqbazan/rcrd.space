/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react'
import Head from 'next/head'
import HomeScreen from 'screens/home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>👨🏻‍💻 Ricardo Q. Bazan (@rqbazan)</title>
      </Head>
      <HomeScreen />
    </>
  )
}
