import clsx from 'clsx'

import { Typography } from '~/ui'

export interface MainHeadingProps {
  title: string | React.ReactNode
  content: string | React.ReactNode
  className?: string
}

export function MainHeading({ title, content, className, ...props }: MainHeadingProps) {
  return (
    <div {...props} className={clsx('space-y-6 mb-8', className)}>
      <Typography as="h1" fontStyle={{ '@initial': 'h2', '@sm': 'h1' }}>
        {title}
      </Typography>
      <Typography fontStyle="p" className="mt-6">
        {content}
      </Typography>
    </div>
  )
}
