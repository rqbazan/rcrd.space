/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import WorkScreen from 'screens/work'

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

function getBaseUrl(req) {
  if (process.env.NODE_ENV !== 'production') {
    return process.env.API
  }

  if (!req) {
    return ''
  }

  return `${req.protocol}://${req.headers['x-now-deployment-url']}`
}

WorkPage.getInitialProps = async ({ req }) => {
  const baseUrl = getBaseUrl(req)
  const response = await fetch(`${baseUrl}/api/works`)
  const { workPosts } = await response.json()

  return { workPosts }
}
