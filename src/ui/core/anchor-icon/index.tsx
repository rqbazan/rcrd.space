import * as React from 'react'
import clsx from 'clsx'
import { Anchor, AnchorProps } from '../anchor'

export interface AnchorIconProps extends AnchorProps {
  children: React.ReactElement
}

// TODO: review `ref` type

export const AnchorIcon = React.forwardRef<HTMLAnchorElement, AnchorIconProps>(function AnchorIcon(
  { className, ...props },
  ref
) {
  return (
    <Anchor
      // @ts-expect-error
      ref={ref}
      {...props}
      className={clsx('hover:text-muted transition-colors ease-in-out duration-300', className)}
    />
  )
})
