import React from 'react'
import icons from './icons'

export default function Icon({ name, size, className }) {
  return React.createElement(icons[name], {
    className,
    width: size,
    height: size,
    fill: 'currentColor'
  })
}
