/* eslint jsx-a11y/accessible-emoji: 0 */
import React from 'react'
import Head from 'next/head'
import WorkScreen from 'screens/work'
import data from 'src/data.json'

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

if (typeof window === 'undefined') {
  WorkPage.getInitialProps = async () => {
    // eslint-disable-next-line global-require
    const remarkTwemoji = require('src/remark-twemoji')

    const workPosts = data.workPosts.map(workPost => {
      return {
        ...workPost,
        body: remarkTwemoji(workPost.body)
      }
    })

    return { workPosts }
  }
}
