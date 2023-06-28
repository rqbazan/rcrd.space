import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import { Typography } from '~/ui/components/typography'

export interface CoverProps {
  src: ImageProps['src']
  alt: string
  description?: React.ReactNode
  className?: string
}

export function CoverImage({ className, description, ...props }: CoverProps) {
  return (
    <div className={clsx(className, 'flex flex-col items-center')}>
      <div className="flex select-none aspect-[4/3] mb-3">
        <Image
          alt="cover"
          className="object-cover border-[6px] md:border-8"
          placeholder="blur"
          priority
          {...props}
        />
      </div>
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
