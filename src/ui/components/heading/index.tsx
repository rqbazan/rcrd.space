import clsx from 'clsx'
import { Typography } from '~/ui/components/typography'

export interface HeadingProps {
  title: string | React.ReactNode
  content: string | React.ReactNode
  className?: string
}

export function Heading({ title, content, className, ...props }: HeadingProps) {
  return (
    <div {...props} className={clsx('space-y-4 mb-8', className)}>
      <Typography asChild fontStyle={{ '@initial': 'h2', '@sm': 'h1' }}>
        <h1>{title}</h1>
      </Typography>
      <Typography fontStyle="p">{content}</Typography>
    </div>
  )
}
