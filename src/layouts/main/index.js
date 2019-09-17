import { useContext, useState } from 'react'
import { MobileContext } from 'src/contexts'
import Menu from 'components/menu'
import Burger from 'components/burger'
import { Header, Content } from './elements'

export default function MainLayout(props) {
  const { children } = props

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
      <Content>{children}</Content>
    </>
  )
}
