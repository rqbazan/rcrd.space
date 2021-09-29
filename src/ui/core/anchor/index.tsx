import * as React from 'react'

import { getExternalLinkProps } from '~/ui/utils'

import { Typography } from '../typography'

export interface AnchorProps extends React.HTMLProps<HTMLAnchorElement> {}

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { children, href, ...props },
  ref
) {
  return (
    <a ref={ref} href={href} {...getExternalLinkProps(href)} {...props}>
      {typeof children === 'string' ? (
        <Typography
          uncapsized
          as="span"
          fontStyle="p"
          fontWeight="medium"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {children}
        </Typography>
      ) : (
        children
      )}
    </a>
  )
})
