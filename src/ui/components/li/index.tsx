import clsx from 'clsx'
import { Typography } from '~/ui/components/typography'

export interface LiProps {
  className?: string
  children: React.ReactNode
}

export function Li({ className, children, ...props }: LiProps) {
  return (
    <Typography asChild className={clsx('list-disc', className)} {...props}>
      <li>{children}</li>
    </Typography>
  )
}
