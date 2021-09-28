import Image, { ImageProps } from 'next/image'

export interface CoverProps extends ImageProps {}

export function Cover(props: CoverProps) {
  const { height, width } = props

  return (
    <div className="flex select-none border-8 border-white">
      <Image alt="cover" {...props} />
    </div>
  )
}
