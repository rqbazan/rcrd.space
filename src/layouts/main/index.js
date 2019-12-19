import React, { useState } from 'react'
import Link from 'next/link'
import Menu from 'components/menu'
import Burger from 'components/burger'
import { Header, Content, Navigation } from './elements'

export default function MainLayout(props) {
  const { children, className, style } = props

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <Header>
        <Navigation>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/work">
            <a href="/work">Work</a>
          </Link>
          <a href="/resume.pdf" target="__blank" rel="noopener">
            Resume
          </a>
        </Navigation>
        <Burger isColorful onClick={() => setMenuIsOpen(true)} />
      </Header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <Content className={className} style={style}>
        {children}
      </Content>
    </>
  )
}
