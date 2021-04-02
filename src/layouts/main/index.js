import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '~/components/nav-item'
import { Burger } from '~/components/burger'
import { Menu } from '~/components/menu'
import { NightModeToggle } from '~/components/night-mode-toggle'

export function MainLayout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const router = useRouter()

  return (
    <>
      <header className="px-6 items-center justify-center shadow-md flex flex-col fixed top-0 inset-x-0 z-40 md:px-0 h-16 text-wording dark:text-white backdrop-blur-4">
        <div className="h-2 fixed top-0 inset-x-0 w-full bg-gradient-to-r from-accent via-yellow-500 to-red-500 dark:from-accent-dark dark:via-purple-500" />
        <nav className="pt-2 flex items-center justify-between h-full md:px-8 lg:px-0 max-w-3xl w-full">
          <ul className="hidden md:flex space-x-8 h-full">
            <Link href="/" passHref>
              <NavItem as="li" currentRoute={router.route}>
                Home
              </NavItem>
            </Link>
            <Link href="/work" passHref>
              <NavItem as="li" currentRoute={router.route}>
                Work
              </NavItem>
            </Link>
            <NavItem
              as="li"
              data-splitbee-event="View Resume"
              href="https://resume.sxntixgo.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </NavItem>
          </ul>
          <NightModeToggle />
          <div className="md:hidden">
            <Burger onClick={() => setMenuIsOpen(true)} />
          </div>
        </nav>
      </header>
      <Menu
        isOpen={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        router={router}
      />
      <main className="flex w-full pt-16 min-h-full md:mr-auto md:ml-auto md:max-w-3xl md:px-8 lg:px-0">
        {children}
      </main>
    </>
  )
}
