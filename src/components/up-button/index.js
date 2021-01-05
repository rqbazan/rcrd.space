import * as React from 'react'
import { useScroll } from '~/hooks/use-scroll'
import Icon from '../icon'
import styles from './styles.module.css'

function onClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function UPButton() {
  const buttonRef = React.useRef()

  useScroll(() => {
    const el = buttonRef.current

    if (!el) {
      return
    }

    if (window.pageYOffset > 100) {
      el.classList.remove(styles.fadeOut)
      el.classList.add(styles.fadeIn)
    } else if (el.classList.contains(styles.fadeIn)) {
      el.classList.remove(styles.fadeIn)
      el.classList.add(styles.fadeOut)
    }
  })

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type="button"
      className={styles.upButton}
    >
      <Icon name="up-arrow" size={36} className="text-body" />
    </button>
  )
}
