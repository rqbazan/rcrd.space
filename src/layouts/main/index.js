import Link from 'next/link'
import { useContext, useState } from 'react'
import { MobileContext } from 'src/contexts'
import Menu from 'components/menu'
import Burger from 'components/burger'
import { Header, Content, Navigation } from './elements'

export default function MainLayout(props) {
  const { children, className, style } = props

  const isMobile = useContext(MobileContext)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      {isMobile && (
        <Header>
          <Burger isColorful onClick={() => setMenuIsOpen(true)} />
          <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
        </Header>
      )}
      {!isMobile && (
        <Header>
          <Navigation>
            <Link href="/">
              <a href="/">Home</a>
            </Link>
            <Link href="/work">
              <a href="/work">Work</a>
            </Link>
            <Link href="/credits">
              <a href="/credits">Credits</a>
            </Link>
          </Navigation>
        </Header>
      )}
      <Content className={className} style={style}>
        {children}
      </Content>
    </>
  )
}
