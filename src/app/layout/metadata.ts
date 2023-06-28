import { Metadata } from 'next'

const shared = {
  shortTitle: 'Ricardo Q. Bazan',
  largeTitle: 'Ricardo Q. Bazan | Software Developer.',
  description:
    "Software developer mostly with NodeJS 💚 I love to write clean beautiful code even when it's unnecessary.",
}

export const metadata: Metadata = {
  title: {
    default: shared.largeTitle,
    template: `%s | ${shared.shortTitle}`,
  },
  description: shared.description,
  alternates: {
    canonical: 'https://rcrd.space',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: shared.largeTitle,
    description: shared.description,
    url: 'https://rcrd.space',
    siteName: shared.shortTitle,
    images: [
      {
        url: 'https://res.cloudinary.com/dpwoyjb1f/image/upload/v1610162961/me/social_banner.png',
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: shared.shortTitle,
    creator: '@rqbazan',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}
