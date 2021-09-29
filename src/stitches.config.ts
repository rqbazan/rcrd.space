import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import mapValues from 'just-map-values'

import twConfig from '../tailwind.config'

const twCustomTheme = twConfig.theme.extend

export const { css, styled, getCssText, globalCss, config, theme, keyframes } = createStitches({
  media: mapValues(twCustomTheme.screen, px => `(min-width: ${px})`),
  theme: {
    fonts: mapValues(twCustomTheme.fontFamily, font => font.join(',')),
    colors: twCustomTheme.colors,
    fontWeights: twCustomTheme.fontWeight,
    fontSizes: twCustomTheme.fontSize,
  },
})

export type CSS = Stitches.CSS<typeof config>
