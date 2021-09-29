/* eslint no-bitwise: 0 */
import React from 'react'

import { Typography } from '~/ui'

export interface TechTagProps {
  children: string
}

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string: string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash)
    hash &= hash
  }

  return hash
}

export const TechTag = React.memo(function TechTag({ children }: TechTagProps) {
  const hash = getHashCode(children) % 360

  const bgColor = `hsl(${hash}, 50%, 10%)`

  const textColor = `hsl(${hash}, 60%, 75%)`

  return (
    <Typography
      as="span"
      className="rounded px-2 select-none border inline-flex items-center"
      style={{ background: bgColor, color: textColor, borderColor: textColor }}
      fontStyle="small"
    >
      {children}
    </Typography>
  )
})
