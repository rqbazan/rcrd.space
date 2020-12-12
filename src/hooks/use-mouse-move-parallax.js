import { useEffect } from 'react'
import { useSpring } from 'react-spring'

const transform = (x, y) => `translate(${x / 10}px,${y / 10}px)`

export function useMouseMoveParallax() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 500, friction: 100 }
  }))

  const style = {
    transform: props.xy.interpolate(transform)
  }

  useEffect(() => {
    function onMouseMove({ clientX: x, clientY: y }) {
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
    }

    function onMouseLeave() {
      set({ xy: [0, 0] })
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return { style }
}
