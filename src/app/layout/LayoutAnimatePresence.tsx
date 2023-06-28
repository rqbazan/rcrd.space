'use client'
import { type PropsWithChildren, Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

export function LayoutAnimatePresence({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <AnimatePresence initial={false} mode="wait">
      <Fragment key={pathname}>{children}</Fragment>
    </AnimatePresence>
  )
}
