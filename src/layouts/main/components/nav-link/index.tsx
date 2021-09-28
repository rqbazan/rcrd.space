import * as React from 'react'
import type { ComponentProps } from '@stitches/react'
import { useRouter } from 'next/router'

import { styled } from '~/stitches.config'
import { BaseTypography, Typography } from '~/ui'
import { getExternalLinkProps } from '~/ui/utils'

export interface NavLinkProps extends AnchorProps {
  href?: string // injected by NextJS
  children: string
}

export type AnchorProps = ComponentProps<typeof Anchor>

const Anchor = styled('a', {
  color: '$muted',
  variants: {
    selected: {
      true: {
        color: '$text',
        [`& > ${BaseTypography}`]: {
          fontWeight: '$semibold',
        },
      },
    },
  },
})

export const MainNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(function MainNavLink(
  { children, href, ...props },
  ref
) {
  const router = useRouter()

  const selected = router.pathname === href

  return (
    <Anchor ref={ref} selected={selected} {...getExternalLinkProps(href)} href={href} {...props}>
      <Typography fontStyle="h5">{children}</Typography>
    </Anchor>
  )
})
