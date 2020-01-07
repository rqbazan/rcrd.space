import React from 'react'
import Head from 'next/head'
import data from 'src/data.json'

const defaults = {
  title: 'Ricardo Q. Bazan (@rqbazan)'
}

export default function SEO(props) {
  const title = props.title || defaults.title

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={`I'm a ${data.profile.role}`} />
      <meta
        name="keywords"
        content="javascript developer, full stack developer, web developer"
      />
      <link rel="shortcut icon" href="/favicon.ico" importance="low" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dpwoyjb1f/image/upload/h_1200,w_1200,c_crop/me/night_owl.jpg"
      />
      <meta property="og:url" content="https://sxntixgo.codes" />
      <meta property="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="wvXG2Bj4EdcRG8LrO7G4ui-kkSvF-VK7gSjrFC-0a1M"
      />
      <link rel="canonical" href="https://sxntixgo.codes" />
      <title>{title}</title>
    </Head>
  )
}
