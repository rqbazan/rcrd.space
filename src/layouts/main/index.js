import * as React from 'react'
import { Burger } from '~/components/burger'
import { Menu } from '~/components/menu'
import { NightModeToggle } from '~/components/night-mode-toggle'
import { UPButton } from '~/components/up-button'
import { Navigation } from '~/components/navigation'

export function MainLayout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  return (
    <>
      <header className="px-6 items-center justify-center shadow-md flex flex-col fixed top-0 inset-x-0 z-40 md:px-0 h-16 text-wording dark:text-white backdrop-blur-4">
        <div className="h-2 fixed top-0 inset-x-0 w-full bg-gradient-to-r from-accent via-yellow-500 to-red-500 dark:from-accent-dark dark:via-purple-500" />
        <div className="pt-2 flex items-center justify-between h-full md:px-8 lg:px-0 max-w-3xl w-full">
          <Navigation className="hidden md:flex h-full" />
          <NightModeToggle />
          <Burger className="md:hidden" onClick={() => setMenuIsOpen(true)} />
        </div>
      </header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <main className="flex w-full pt-16 min-h-full md:mr-auto md:ml-auto md:max-w-3xl md:px-8 lg:px-0">
        {children}
      </main>
      <div className="fixed bottom-0 right-0 mr-4 mb-4 lg:mr-8 lg:mb-8">
        <UPButton />
      </div>
    </>
  )
}
