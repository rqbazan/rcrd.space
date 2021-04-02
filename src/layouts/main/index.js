import * as React from 'react'
import Link from 'next/link'
import Burger from '~/components/burger'
import Menu from '~/components/menu'
import NightModeToggle from '~/components/night-mode-toggle'

export default function MainLayout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  return (
    <>
      <header className="px-6 items-center justify-center shadow-md flex flex-col fixed top-0 inset-x-0 z-40 md:px-0 h-16 text-wording dark:text-white backdrop-blur-4">
        <div className="h-2 fixed top-0 inset-x-0 w-full bg-gradient-to-r from-accent via-yellow-500 to-red-500 dark:from-accent-dark dark:via-purple-500" />
        <div className="flex items-center h-full md:px-8 lg:px-0 max-w-3xl w-full">
          <div className="flex items-center justify-between w-full">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <a href="/">Home</a>
              </Link>
              <Link href="/work">
                <a href="/work">Work</a>
              </Link>
              <a
                data-splitbee-event="View Resume"
                href="https://resume.sxntixgo.codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </nav>
            <NightModeToggle />
          </div>
          <div className="md:hidden">
            <Burger onClick={() => setMenuIsOpen(true)} />
          </div>
        </div>
      </header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <main className="flex w-full pt-16 min-h-full md:mr-auto md:ml-auto md:max-w-3xl md:px-8 lg:px-0">
        {children}
      </main>
    </>
  )
}
