import * as React from 'react'
import { MainFooter, MainHeader } from './components'

export interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col min-h-full xl:max-w-[980px] lg:max-w-[840px] md:max-w-[720px] px-6 md:px-4 py-8 md:py-24 mx-auto">
      <MainHeader className="mb-6" />
      {children}
      <MainFooter className="mt-auto pt-16" />
    </main>
  )
}

export function getMainLayout(element: React.ReactElement) {
  return <MainLayout>{element}</MainLayout>
}

export * from './components'
