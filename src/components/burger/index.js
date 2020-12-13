import React from 'react'
import Icon from '../icon'

export default function Burger({ isColorful, onClick }) {
  return (
    <div role="button" onClick={onClick} onKeyPress={onClick} tabIndex={0}>
      <img
        src="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto/me/colorful-burger.png"
        alt="burger"
        height={32}
        width={32}
        style={{ display: isColorful ? 'block' : 'none' }}
      />
      <div style={{ display: isColorful ? 'none' : 'block' }}>
        <Icon name="burger" size={32} />
      </div>
    </div>
  )
}
