import React from 'react'
import icons from './icons.json'

export default function Icon({ name, size, color }) {
  const { path, viewBox } = icons[name]

  return (
    <svg width={size} height={size} viewBox={viewBox} color={color}>
      <path fill="currentColor" d={path} />
    </svg>
  )
}
