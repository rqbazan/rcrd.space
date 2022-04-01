import * as React from 'react'
import { getLayout } from '~/layouts'
import { HomeView } from '~/views'

export default function HomePage() {
  return <HomeView />
}

HomePage.getLayout = getLayout
