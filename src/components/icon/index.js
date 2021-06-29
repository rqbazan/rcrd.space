import * as React from 'react'
import icons from './icons'

export function Icon({ name, size, className }) {
  return React.createElement(icons[name], {
    className,
    width: size,
    height: size,
  })
}
