import React from 'react'
import { navigate, Location } from '@reach/router'
import Burger from '../burger'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

export default function Menu({ isOpen, onClose }) {
  return (
    <aside
      className="bg-white h-screen fixed right-0 top-0 w-full z-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="absolute flex items-center justify-end w-full h-16 px-6">
        <Burger isColorful={false} onClick={onClose} />
      </div>
      <Location>
        {({ location }) => (
          <nav className="flex items-center flex-col justify-center w-full">
            {menuItems.map(item => (
              <a
                className="text-2xl font-light mb-10"
                key={`mobile-menu-${item.href}`}
                href={item.href}
                onClick={e => {
                  e.preventDefault()

                  if (location.pathname === item.href) {
                    onClose()
                  } else {
                    navigate(item.href)
                  }
                }}
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
        )}
      </Location>
    </aside>
  )
}
