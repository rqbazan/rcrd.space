import * as React from 'react'
import type { ComponentProps } from '@stitches/react'
import { useRouter } from 'next/router'

import { CSS, styled } from '~/stitches.config'
import { BaseTypography, Typography } from '~/ui'
import { getExternalLinkProps } from '~/ui/utils'

export interface NavLinkProps extends AnchorProps {
  href?: string // injected by NextJS
  children: string
}

export type AnchorProps = ComponentProps<typeof Anchor>

const selectedVariant: CSS = {
  color: '$text',
  [`& > ${BaseTypography}`]: {
    fontWeight: '$semibold',
  },
}

const Anchor = styled('a', {
  color: '$muted',
  '&:active': {
    ...selectedVariant,
  },
  variants: {
    selected: {
      true: selectedVariant,
    },
  },
})

export const MainNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(function MainNavLink(
  { children, href, className, ...props },
  ref
) {
  const router = useRouter()

  const selected = router.pathname === href

  return (
    <Anchor ref={ref} href={href} selected={selected} {...getExternalLinkProps(href)} {...props}>
      <Typography as="span" fontStyle="h5">
        {children}
      </Typography>
    </Anchor>
  )
})
