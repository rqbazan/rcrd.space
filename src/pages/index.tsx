import * as React from 'react'
import { getMainLayout } from '~/ui/layouts'
import { HomeView } from '~/views'

export default function HomePage() {
  return <HomeView />
}

HomePage.getLayout = getMainLayout
