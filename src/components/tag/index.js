/* eslint no-bitwise: 0 */
import React from 'react'

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash)
    hash &= hash
  }

  return hash
}

export default function Tag({ children }) {
  const shortened = getHashCode(children) % 360

  const bgColor = `hsl(${shortened},50%,90%)`
  const textColor = `hsl(${shortened},100%,20%)`

  return (
    <span
      className="rounded text-xs m-1 px-2 select-none md:text-sm border"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: textColor
      }}
    >
      {children}
    </span>
  )
}
