import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Burger from '~/components/burger'
import Menu from '~/components/menu'
import NightModeToggle from '~/components/night-mode-toggle'
import styles from './styles.module.css'

export default function MainLayout({ children, className }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className={className}>
      <header className="px-6 items-center justify-center bg-black shadow-lg flex fixed top-0 w-full z-40 md:px-0 h-16">
        <div className="flex h-full md:px-8 lg:px-0 max-w-3xl w-full items-center justify-between">
          <nav className="hidden md:flex items-center text-white space-x-8">
            <Link href="/">
              <a href="/">Home</a>
            </Link>
            <Link href="/work">
              <a href="/work">Work</a>
            </Link>
            <a href="/resume.pdf" target="__blank" rel="noopener">
              Resume
            </a>
          </nav>
          <NightModeToggle />
        </div>
        <div className="md:hidden">
          <Burger isColorful onClick={() => setMenuIsOpen(true)} />
        </div>
      </header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <main
        className={clsx(
          'flex mt-16 w-full md:mr-auto md:ml-auto md:max-w-3xl md:px-8 lg:px-0',
          styles.content
        )}
      >
        {children}
      </main>
    </div>
  )
}
