import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import { Typography } from '~/ui/core'

export interface CoverProps extends ImageProps {
  src: string
  description?: React.ReactNode
  className?: string
}

export function CoverImage({ className, description, ...props }: CoverProps) {
  return (
    <div className={clsx(className, 'flex flex-col items-center')}>
      <a href={props.src} target="_blank" rel="noreferrer" className="mb-3">
        <div className="flex select-none aspect-[4/3]">
          <Image alt="cover" className="object-cover border-[6px] md:border-8" {...props} />
        </div>
      </a>
      {typeof description === 'string' ? (
        <Typography fontStyle="small" muted>
          {description}
        </Typography>
      ) : (
        description
      )}
    </div>
  )
}
