import React from 'react'
import useScroll from '~/hooks/use-scroll'
import Icon from '../icon'
import './styles.css'

function onClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function RoundedButton() {
  const buttonRef = React.useRef()

  useScroll(() => {
    const el = buttonRef.current

    if (window.pageYOffset > 100) {
      el.classList.remove('fade-out')
      el.classList.add('fade-in')
    } else if (el.classList.contains('fade-in')) {
      el.classList.remove('fade-in')
      el.classList.add('fade-out')
    }
  })

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type="button"
      className="up-button"
    >
      <Icon name="up-arrow" size={36} />
    </button>
  )
}
