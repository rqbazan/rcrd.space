import React from 'react'
import Head from 'react-helmet'
import { useStaticQuery, graphql as gql } from 'gatsby'

const query = gql`
  query siteMetadataQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

export default function SEO(props) {
  const data = useStaticQuery(query)

  const defaults = data.site.siteMetadata

  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const url = props.url || defaults.siteUrl

  return (
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="javascript developer, full stack developer, web developer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dpwoyjb1f/image/upload/h_1200,w_1200,c_crop/me/night_owl.jpg"
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="wvXG2Bj4EdcRG8LrO7G4ui-kkSvF-VK7gSjrFC-0a1M"
      />
      <link rel="canonical" href="https://sxntixgo.codes" />
      <link rel="icon" href="/favicon/32x32.png" type="image/png" />
      <link
        rel="apple-touch-icon"
        href="/favicon/180x180.png"
        type="image/png"
      />
      <title>{title}</title>
    </Head>
  )
}
