import clsx from 'clsx'

import { Typography } from '~/ui/core'

export interface LiProps {
  className?: string
  children: React.ReactNode
}

export function Li({ className, children, ...props }: LiProps) {
  return (
    <li {...props} className={clsx('flex', className)}>
      <span className="mr-2 mt-1">
        <div className="rounded-[50%] h-1 w-1 bg-muted" />
      </span>
      <Typography>{children}</Typography>
    </li>
  )
}
