import * as React from 'react'

import { MainLayout } from '~/layouts'
import { HomeView } from '~/views'

export default function HomePage() {
  return <HomeView />
}

HomePage.Layout = MainLayout
