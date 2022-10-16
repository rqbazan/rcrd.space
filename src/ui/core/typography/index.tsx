import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from '@stitches/react'
import clsx from 'clsx'
import { CSS, css } from '~/stitches.config'

export interface TypographyProps extends TypographyVariants {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  css?: CSS
}

export type TypographyVariants = VariantProps<typeof BaseTypography>

type ComponentMap = Record<
  Extract<TypographyVariants['fontStyle'], string>, // `fontStyle` name like 'h1', 'h2', etc
  React.ComponentType<any> | string // tag element like `<h1 />`, `<h2 />`, etc
>

export const BaseTypography = css({
  fontFamily: 'inherit',
  lineHeight: 1,
  variants: {
    fontStyle: {
      inherit: {
        fontWeight: 'inherit',
        fontSize: 'inherit',
      },
      tiny: {
        fontWeight: '$regular',
        fontSize: '$tiny',
      },
      small: {
        fontWeight: '$regular',
        fontSize: '$small',
      },
      p: {
        fontWeight: '$regular',
        color: '$muted',
        fontSize: '$p',
        lineHeight: 1.5,
      },
      h5: {
        fontWeight: '$semibold',
        textTransform: 'uppercase',
        fontSize: '$h5',
      },
      h4: {
        fontWeight: '$medium',
        fontSize: '$h4',
      },
      h3: {
        fontWeight: '$medium',
        fontSize: '$h3',
      },
      h2: {
        fontWeight: '$semibold',
        fontSize: '$h2',
      },
      h1: {
        fontWeight: '$semibold',
        fontSize: '$h1',
      },
    },
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
    muted: {
      true: {
        color: '$muted',
      },
      false: {
        color: '$text',
      },
    },
  },
  defaultVariants: {
    fontStyle: 'p',
  },
})

const componentMap: ComponentMap = {
  tiny: 'small',
  small: 'small',
  inherit: 'span',
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(function Typography(
  { fontStyle, fontWeight, muted, css, className, asChild, ...props },
  forwadedRef
) {
  const baseClassName = BaseTypography({ fontStyle, fontWeight, muted, css })

  const Component = asChild ? Slot : typeof fontStyle === 'string' ? componentMap[fontStyle] : 'p'

  return (
    <Component {...props} ref={forwadedRef} className={clsx(baseClassName.toString(), className)} />
  )
})
