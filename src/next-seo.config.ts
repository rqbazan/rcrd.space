import { DefaultSeoProps } from 'next-seo'

const defaultTitle = 'Ricardo Q. Bazan - Software Developer'

// prettier-ignore
const description = "Software developer mostly with NodeJS 💚 I love to write clean beautiful code even when it's unnecessary."

export const defaultSEO: DefaultSeoProps = {
  defaultTitle,
  description,
  titleTemplate: '%s | Ricardo Q. Bazan',
  canonical: 'https://sxntixgo.codes',
  openGraph: {
    description,
    images: [
      {
        url: 'https://res.cloudinary.com/dpwoyjb1f/image/upload/v1610162961/me/social_banner.png',
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://sxntixgo.codes',
    site_name: 'Ricardo Q. Bazan',
    title: defaultTitle,
    profile: {
      firstName: 'Ricardo',
      lastName: 'Q. Bazan',
      username: 'rqbazan',
    },
  },
  twitter: {
    handle: '@rqbazan',
    site: '@rqbazan',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/128x128.png',
      sizes: '128x128',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
}
