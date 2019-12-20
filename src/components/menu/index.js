import React from 'react'
import { useRouter } from 'next/router'
import Burger from '../burger'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

export default function Menu({ isOpen, onClose }) {
  const router = useRouter()

  function getOnItemClick(route) {
    return e => {
      e.preventDefault()

      if (router.route === route) {
        onClose()
      } else {
        router.push(route)
      }
    }
  }

  return (
    <aside
      className="bg-white h-screen fixed right-0 top-0 w-full z-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="absolute flex items-center justify-end w-full h-16 px-6">
        <Burger isColorful={false} onClick={onClose} />
      </div>
      <nav className="flex items-center flex-col justify-center w-full">
        {menuItems.map(item => (
          <a
            className="text-2xl font-light mb-10"
            key={`mobile-menu-${item.href}`}
            href={item.href}
            onClick={getOnItemClick(item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="text-2xl font-light"
          href="/resume.pdf"
          target="__blank"
          rel="noopener"
        >
          Resume
        </a>
      </nav>
    </aside>
  )
}
