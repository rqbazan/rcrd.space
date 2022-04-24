import * as React from 'react'
import { getStaticImageProps } from '~/lib/get-static-image-props'
import { SEO } from '~/ui'
import { getMainLayout } from '~/ui/layouts'
import { UsesView } from '~/views'

export default function UsesPage() {
  return (
    <React.Fragment>
      <SEO title="Uses" />
      <UsesView />
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const coverImageProps = await getStaticImageProps('/img/cover/uses-v2.webp')

  return {
    props: {
      coverImageProps,
    },
  }
}

UsesPage.getLayout = getMainLayout
