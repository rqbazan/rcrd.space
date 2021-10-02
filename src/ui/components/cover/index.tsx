import Image, { ImageProps } from 'next/image'

export interface CoverProps extends ImageProps {}

export function Cover(props: CoverProps) {
  return (
    <div className="flex select-none border-8 dark:border-text-dark border-text">
      <Image alt="cover" {...props} />
    </div>
  )
}
