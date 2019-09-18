export default function Burger(props) {
  const { isColorful, onClick } = props

  return (
    <div role="button" onClick={onClick} onKeyPress={onClick} tabIndex={0}>
      <img
        src="/static/colorful-burger.png"
        alt="burger"
        height={32}
        style={{ display: isColorful ? 'block' : 'none' }}
      />
      <img
        src="/static/grayscale-burger.png"
        alt="burger"
        height={32}
        style={{ display: isColorful ? 'none' : 'block' }}
      />
    </div>
  )
}
