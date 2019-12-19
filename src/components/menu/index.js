import React from 'react'
import { useRouter } from 'next/router'
import Burger from '../burger'
import { Container, Navigation } from './elements'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

export default function Menu(props) {
  const { isOpen, onClose } = props

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
    <Container isOpen={isOpen}>
      <Burger isColorful={false} onClick={onClose} />
      <Navigation>
        {menuItems.map(item => (
          <a
            key={`mobile-menu-${item.href}`}
            href={item.href}
            onClick={getOnItemClick(item.href)}
          >
            {item.label}
          </a>
        ))}
        <a href="/resume.pdf" target="__blank" rel="noopener">
          Resume
        </a>
      </Navigation>
    </Container>
  )
}
