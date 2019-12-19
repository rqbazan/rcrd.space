import React from 'react'
import Head from 'next/head'
import WorkScreen from 'screens/work'
import data from 'src/data.json'

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Thing I’ve worked</title>
        <link rel="canonical" href="https://sxntixgo.codes/work" />
      </Head>
      <WorkScreen workPosts={data.workPosts} />
    </>
  )
}
