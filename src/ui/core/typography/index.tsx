import * as React from 'react'
import fontMetrics from '@capsizecss/metrics/iBMPlexSans'
import type { ComponentProps } from '@stitches/react'

import { styled, theme } from '~/stitches.config'

import { capsized } from './capsized'

// TODO: fix `as` prop, because it shouldn't re-declared here
export interface TypographyProps extends BaseTypographyProps {
  as?: string | React.ComponentType<any>
}

export type BaseTypographyProps = ComponentProps<typeof BaseTypography>

type ComponentMap = Record<
  Extract<BaseTypographyProps['fontStyle'], string>, // `fontStyle` name like 'h1', 'h2', etc
  React.ComponentType<any> | string // tag element like `<h1 />`, `<h2 />`, etc
>

export const BaseTypography = styled('p', {
  fontFamily: 'inherit',
  variants: {
    fontWeight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
    },
    fontStyle: {
      small: {
        fontWeight: '$regular',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.small.value),
          lineGap: 0,
        }),
      },
      p: {
        fontWeight: '$regular',
        color: '$muted',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.p.value),
          lineGap: 14,
        }),
      },
      h5: {
        fontWeight: '$medium',
        textTransform: 'uppercase',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.h5.value),
          lineGap: 0,
        }),
      },
      h4: {
        fontWeight: '$regular',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.h4.value),
          lineGap: 0,
        }),
      },
      h3: {
        fontWeight: '$medium',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.h3.value),
          lineGap: 0,
        }),
      },
      h2: {
        fontWeight: '$semibold',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.h2.value),
          lineGap: 0,
        }),
      },
      h1: {
        fontWeight: '$semibold',
        ...capsized({
          fontMetrics,
          fontSize: Number(theme.fontSizes.h1.value),
          lineGap: 0,
        }),
      },
    },
    muted: {
      true: {
        color: '$muted',
      },
      false: {
        color: '$text',
      },
    },
    uncapsized: {
      true: {
        '&::before': {
          content: 'none',
        },
        '&::after': {
          content: 'none',
        },
      },
    },
  },
  defaultVariants: {
    fontStyle: 'p',
  },
})

const componentMap: ComponentMap = {
  small: 'small',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
}

export function Typography(props: TypographyProps) {
  return (
    <BaseTypography
      as={typeof props.fontStyle === 'string' ? componentMap[props.fontStyle] : 'p'}
      {...props}
    />
  )
}
