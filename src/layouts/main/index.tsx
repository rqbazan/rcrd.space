import { MainFooter, MainHeader } from './components'

export interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex flex-col min-h-full max-w-[720px] px-6 md:px-4 py-8 md:py-24 mx-auto">
      <MainHeader className="mb-6" />
      {children}
      <MainFooter className="mt-auto" />
    </main>
  )
}

export * from './components'
