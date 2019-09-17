import Link from 'next/link'
import { useRouter } from 'next/router'
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

  const router = useRouter()

  function getOnItemClick(route) {
    return () => {
      if (router.route === route) {
        onClose()
      }
    }
  }

  return (
    <Container isOpen={isOpen}>
      <Burger isColorful={false} onClick={onClose} />
      <Navigation>
        <MenuItem href="/" onClick={getOnItemClick('/')}>
          Home
        </MenuItem>
        <MenuItem href="/work" onClick={getOnItemClick('/work')}>
          Work
        </MenuItem>
        <MenuItem href="/credits" onClick={getOnItemClick('/credits')}>
          Credits
        </MenuItem>
      </Navigation>
    </Container>
  )
}
