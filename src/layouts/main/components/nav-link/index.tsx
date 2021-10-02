import * as React from 'react'
import type { ComponentProps } from '@stitches/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { styled } from '~/stitches.config'
import { BaseTypography, Typography } from '~/ui'
import { getExternalLinkProps } from '~/ui/utils'

export interface NavLinkProps extends AnchorProps {
  href?: string // injected by NextJS
  children: string
}

export type AnchorProps = ComponentProps<typeof Anchor>

// TODO: review `selected` variant typing

const Anchor = styled('a', {
  color: '$muted',
  variants: {
    selected: {
      // @ts-ignore
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
  { children, href, className, ...props },
  ref
) {
  const router = useRouter()

  const selected = router.pathname === href

  return (
    <Anchor ref={ref} href={href} selected={selected} {...getExternalLinkProps(href)} {...props}>
      <Typography
        as="span"
        fontStyle="h5"
        className={clsx({
          'dark:hover:text-gray-300 hover:text-gray-400 transition-colors ease-in-out duration-300':
            !selected,
        })}
      >
        {children}
      </Typography>
      {selected && (
        <motion.div
          animate
          transition={{ duration: 0.3 }}
          className="h-1 bg-text dark:bg-text-dark w-full rounded-lg mt-1.5"
          layoutId="nav-link__underline"
        />
      )}
    </Anchor>
  )
})
