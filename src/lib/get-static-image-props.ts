import { getPlaiceholder } from 'plaiceholder'

export type ImageProps = ReturnType<typeof getStaticImageProps>

export async function getStaticImageProps(src: string) {
  const { base64, img } = await getPlaiceholder(src)

  return {
    ...img,
    placeholder: 'blur',
    blurDataURL: base64,
  }
}
