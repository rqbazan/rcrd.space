import React, { useState } from 'react'
import Link from 'next/link'
import Menu from 'components/menu'
import Burger from 'components/burger'

export default function MainLayout({ children, style }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <header className="px-6 items-center bg-black shadow-lg flex justify-end fixed top-0 w-full z-40 md:px-0 h-16">
        <nav className="hidden items-center h-full ml-auto mr-auto max-w-3xl w-1/2 md:w-full md:flex text-white">
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/work">
            <a className="ml-8" href="/work">
              Work
            </a>
          </Link>
          <a
            className="ml-auto"
            href="/resume.pdf"
            target="__blank"
            rel="noopener"
          >
            Resume
          </a>
        </nav>
        <div className="md:hidden">
          <Burger isColorful onClick={() => setMenuIsOpen(true)} />
        </div>
      </header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <div
        className="flex mt-16 w-full md:mr-auto md:ml-auto md:max-w-3xl"
        style={style}
      >
        {children}
      </div>
    </>
  )
}
