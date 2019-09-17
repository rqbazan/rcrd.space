import Link from 'next/link'
import Burger from '../burger'
import { Container, Navigation } from './elements'

function MenuItem(props) {
  const { href, children, onClick } = props

  return (
    <Link href={href}>
      {/* pass href manually to avoid eslint complain */}
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </Link>
  )
}

export default function Menu(props) {
  const { isOpen, onClose } = props

  return (
    <Container isOpen={isOpen}>
      <Burger isColorful={false} onClick={onClose} />
      <Navigation>
        <MenuItem href="/" onClick={onClose}>
          Home
        </MenuItem>
        <MenuItem href="/work" onClick={onClose}>
          Work
        </MenuItem>
        <div role="button">Credits</div>
      </Navigation>
    </Container>
  )
}
