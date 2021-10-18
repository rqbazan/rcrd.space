/* eslint no-bitwise: 0 */
import React from 'react'

import { styled } from '~/stitches.config'
import { Typography } from '~/ui'

export interface TechTagProps {
  children: string
  className?: string
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

const Box = styled('span', {
  '--bg-saturation': '50%',
  '--bg-lightness': '90%',
  '--txt-saturation': '100%',
  '--txt-lightness': '20%',
  background: `hsl(var(--hash), var(--bg-saturation), var(--bg-lightness))`,
  color: `hsl(var(--hash), var(--txt-saturation), var(--txt-lightness))`,
  borderColor: `hsl(var(--hash), var(--txt-saturation), var(--txt-lightness))`,
  [`.dark &`]: {
    '--bg-saturation': '50%',
    '--bg-lightness': '10%',
    '--txt-saturation': '60%',
    '--txt-lightness': '75%',
  },
})

export const TechTag = React.memo(function TechTag({ children, className }: TechTagProps) {
  const hash = getHashCode(children) % 360

  return (
    <Typography uncapsized fontStyle="small" asChild className={className}>
      <Box
        // @ts-expect-error
        style={{ '--hash': hash }}
        className="rounded px-2 pt-1.5 pb-1 select-none border"
      >
        {children}
      </Box>
    </Typography>
  )
})
