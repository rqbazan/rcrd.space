import * as React from 'react'
import { getExternalLinkProps } from '~/ui/utils'
import { Typography } from '../typography'

export interface AnchorProps extends React.HTMLProps<HTMLAnchorElement> {}

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
      uncapsized
      asChild
      fontStyle="p"
      fontWeight="medium"
      className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-700 hover:text-blue-600 transition-colors"
    >
      {anchorElement}
    </Typography>
  )
})
