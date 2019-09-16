import Burger from '../burger'
import { Container } from './elements'

export default function Menu(props) {
  const { isOpen, onClose } = props

  return (
    <Container as="nav" isOpen={isOpen}>
      <Burger isColorful={false} onClick={onClose} />
    </Container>
  )
}
