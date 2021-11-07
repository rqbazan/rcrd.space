import { useRouter } from 'next/router'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'

import { defaultSEO } from '~/next-seo.config'

export function SEO(props: DefaultSeoProps) {
  const router = useRouter()

  return (
    <DefaultSeo
      {...props}
      openGraph={{
        url: `${defaultSEO.canonical}${router.asPath}`,
        ...props.openGraph,
      }}
    />
  )
}
