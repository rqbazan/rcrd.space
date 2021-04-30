import * as React from 'react'
import { useScroll } from '~/hooks/use-scroll'
import { Icon } from '../icon'

export function UPButton() {
  const buttonRef = React.useRef()

  useScroll(() => {
    const el = buttonRef.current

    if (!el) {
      return
    }

    if (window.pageYOffset > 100) {
      el.classList.remove('opacity-0')
      el.classList.add('opacity-100')
    } else if (el.classList.contains('opacity-100')) {
      el.classList.remove('opacity-100')
      el.classList.add('opacity-0')
    }
  })

  return (
    <button
      ref={buttonRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      type="button"
      className="transition-opacity duration-500 ease-in-out transform rounded-full h-12 w-12 flex items-center justify-center bg-title dark:bg-title-dark shadow-lg opacity-0 focus:outline-none"
    >
      <Icon
        name="up-arrow"
        size={36}
        className="dark:text-title text-title-dark"
      />
    </button>
  )
}
