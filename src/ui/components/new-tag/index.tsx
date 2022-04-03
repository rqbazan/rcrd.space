import clsx from 'clsx'
import { Typography } from '~/ui/core'

export interface NewTagProps {
  className?: string
}

export function NewTag({ className }: NewTagProps) {
  return (
    <div
      className={clsx(
        'bg-yellow-300 dark:bg-selection-dark text-body-dark rounded-md inline-flex items-center justify-center px-1 py-0.5 hover:scale-110 transition-transform',
        className
      )}
    >
      <Typography fontStyle="tiny" className="font-semibold uppercase translate-y-[0.05rem]">
        New
      </Typography>
    </div>
  )
}
