import * as React from 'react'
import type { ComponentProps } from '@stitches/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { styled } from '~/stitches.config'
import { Typography } from '~/ui'
import { getExternalLinkProps } from '~/ui/utils'

export interface NavLinkProps extends AnchorProps {
  href?: string // injected by NextJS
  children: React.ReactNode
}

export type AnchorProps = ComponentProps<typeof Anchor>

const Anchor = styled('a', {
  color: '$muted',
  variants: {
    selected: {
      true: {
        color: '$text',
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
        asChild
        fontStyle="h5"
        className={clsx({
          'dark:hover:text-gray-300 hover:text-gray-400 transition-colors ease-in-out duration-300':
            !selected,
        })}
      >
        <span>{children}</span>
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
