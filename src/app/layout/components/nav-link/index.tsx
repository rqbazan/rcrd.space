'use client'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { styled } from '~/stitches.config'
import { Typography } from '~/ui/components/typography'
import { getExternalLinkProps } from '~/ui/utils/external-link'

export interface NavLinkProps {
  href?: string // injected by NextJS
  children: React.ReactElement
  className?: string
}

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

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { children, href, className, ...props },
  ref
) {
  const pathname = usePathname()
  const selected = pathname === href

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
        <span>{React.cloneElement(children, { className: 'h-6 w-6' })}</span>
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
