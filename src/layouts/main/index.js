import React, { useState } from 'react'
import { Link } from 'gatsby'
import Burger from '~/components/burger'
import Menu from '~/components/menu'
import './styles.css'

export default function MainLayout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <header className="px-6 items-center bg-black shadow-lg flex justify-end fixed top-0 w-full z-40 md:px-0 h-16">
        <nav className="hidden items-center h-full ml-auto mr-auto max-w-3xl w-1/2 md:w-full md:flex text-white">
          <Link to="/">Home</Link>
          <Link to="/work" className="ml-8">
            Work
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
      <main className="flex mt-16 w-full md:mr-auto md:ml-auto md:max-w-3xl main-layout__content">
        {children}
      </main>
    </>
  )
}
