import { ColorModes } from '@rqbazan/set-initial-color-mode'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import mapValues from 'just-map-values'
import twConfig from '../tailwind.config'

const twCustomTheme = twConfig.theme.extend

interface TailwindCSSMedia {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export const {
  css,
  styled,
  getCssText,
  globalCss,
  config,
  theme,
  keyframes,
  createTheme,
  prefix,
  reset,
} = createStitches({
  media: mapValues(
    twCustomTheme.screens as any,
    width => `(min-width: ${width})`
  ) as unknown as TailwindCSSMedia,
  theme: {
    fonts: mapValues(twCustomTheme.fontFamily, font => font.join(',')),
    colors: mapValues(twCustomTheme.colors, color => color.DEFAULT),
    fontWeights: twCustomTheme.fontWeight,
    fontSizes: twCustomTheme.fontSize,
  },
})

export const darkTheme = createTheme(ColorModes.DARK, {
  colors: mapValues(twCustomTheme.colors, color => color.dark),
})

export type CSS = Stitches.CSS<typeof config>
