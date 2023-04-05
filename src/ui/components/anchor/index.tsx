import * as React from 'react'
import { getExternalLinkProps } from '~/ui/utils/external-link'
import { Typography, TypographyProps } from '../typography'

export interface AnchorProps extends TypographyProps {
  href: string
}

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { children, href, ...props },
  ref
) {
  const anchorElement = (
    <a ref={ref} href={href} {...getExternalLinkProps(href)} {...props}>
      {children}
    </a>
  )

  if (typeof children !== 'string') {
    return anchorElement
  }

  return (
    <Typography
      asChild
      fontWeight="medium"
      className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-700 hover:text-blue-600 transition-colors"
      {...props}
    >
      {anchorElement}
    </Typography>
  )
})
