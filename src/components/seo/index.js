import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

function getSEOProps(techProfile, overrides) {
  const title = overrides.title
    ? `${overrides.title} – ${techProfile.name}`
    : `${techProfile.name} – ${techProfile.seoTitle}`

  const description = techProfile.seoDescription

  return {
    title,
    description,
    canonical: techProfile.website,
    openGraph: {
      type: 'website',
      url: techProfile.website,
      title,
      description,
      images: [
        {
          url: techProfile.seoBanner,
          alt: title,
          width: 2240,
          height: 1260,
        },
      ],
    },
    twitter: {
      title,
      handle: '@rqbazan',
      site: '@rqbazan',
      cardType: 'summary_large_image',
    },
  }
}

export function SEO({ techProfile, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18181b" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          href="/favicon-180x180.png"
          type="image/png"
        />
      </Head>
      <DefaultSeo {...getSEOProps(techProfile, props)} />
    </>
  )
}
