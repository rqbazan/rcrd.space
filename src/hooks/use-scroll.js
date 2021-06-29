import * as React from 'react'

export function useScroll(callback) {
  React.useEffect(() => {
    const listener = callback

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
