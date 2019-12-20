import React from 'react'
import icons from './icons.json'

export default function Icon({ name, size, className }) {
  const { path, viewBox, fill } = icons[name]

  return (
    <svg width={size} height={size} viewBox={viewBox} className={className}>
      <path fill={fill || 'currentColor'} d={path} />
    </svg>
  )
}
