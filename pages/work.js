/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import WorkScreen from 'screens/work'
import { getBaseAPIUrl } from 'src/utils'

export default function WorkPage({ workPosts }) {
  return (
    <>
      <Head>
        <title>🎉 Thing I’ve worked</title>
      </Head>
      <WorkScreen workPosts={workPosts} />
    </>
  )
}

WorkPage.getInitialProps = async ({ req }) => {
  const baseUrl = getBaseAPIUrl(req)

  const response = await fetch(`${baseUrl}/works`)
  const { workPosts } = await response.json()

  return { workPosts }
}
