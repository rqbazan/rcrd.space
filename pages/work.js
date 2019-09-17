/* eslint jsx-a11y/accessible-emoji: 0 */
import Head from 'next/head'
import WorkScreen from 'screens/work'

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>🎉 Thing I’ve worked</title>
      </Head>
      <WorkScreen />
    </>
  )
}
