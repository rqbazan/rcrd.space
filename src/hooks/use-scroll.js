import React from 'react'

export default function useScroll(callback) {
  React.useEffect(() => {
    const listener = callback

    window.addEventListener('scroll', listener, false)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
}
