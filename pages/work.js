import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import WorkScreen from 'screens/work'
import getBaseAPIUrl from 'utils/get-base-api-url'

export default function WorkPage({ workPosts }) {
  return (
    <>
      <Head>
        <title>Thing I’ve worked</title>
        <link rel="canonical" href="https://sxntixgo.codes/work" />
      </Head>
      <WorkScreen workPosts={workPosts} />
    </>
  )
}

WorkPage.getInitialProps = async ({ req }) => {
  const baseUrl = getBaseAPIUrl(req)
  const response = await fetch(`${baseUrl}/works`)

  return response.json()
}
