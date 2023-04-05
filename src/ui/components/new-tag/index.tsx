import clsx from 'clsx'
import { Typography } from '~/ui/components/typography'

export interface NewTagProps {
  className?: string
}

export function NewTag({ className }: NewTagProps) {
  return (
    <div
      className={clsx(
        'bg-orange-300 text-body-dark rounded-md inline-flex items-center justify-center px-1 py-0.5',
        className
      )}
    >
      <Typography
        fontStyle="tiny"
        fontWeight="semibold"
        className="uppercase translate-y-[0.05rem]"
      >
        New
      </Typography>
    </div>
  )
}
