import { useEffect } from 'react'
import useMedia from 'use-media'
import random from 'lodash.random'

function getRandomMouseMoveEvent() {
  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }

  const bounds = {
    h: window.innerHeight / 20,
    w: (2 * window.innerWidth) / 30
  }

  const x = random(center.x - bounds.w, center.x + bounds.w)

  const y = random(center.y - bounds.h, center.y + bounds.h)

  const e = document.createEvent('MouseEvents')

  e.initMouseEvent('mousemove', true, false, window, 1, null, null, x, y)

  return e
}

export function useRandomMouseMove() {
  const isSmall = useMedia({ maxWidth: 768 })

  useEffect(() => {
    if (!isSmall) {
      return () => {}
    }

    const timerId = setInterval(() => {
      const event = getRandomMouseMoveEvent()

      document.dispatchEvent(event)
    }, 300)

    return () => {
      clearInterval(timerId)
    }
  }, [isSmall])
}
