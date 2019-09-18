export default function Burger(props) {
  const { isColorful, onClick } = props

  return (
    <div role="button" onClick={onClick} onKeyPress={onClick} tabIndex={0}>
      <img
        src="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto/me/colorful-burger.png"
        alt="burger"
        height={32}
        style={{ display: isColorful ? 'block' : 'none' }}
      />
      <img
        src="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto/me/grayscale-burger.png"
        alt="burger"
        height={32}
        style={{ display: isColorful ? 'none' : 'block' }}
      />
    </div>
  )
}
