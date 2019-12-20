import React, { useState } from 'react'
import Media from 'react-media'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from './prism-theme'

const defaultQuery = {
  maxWidth: 767
}

export default function HighlightCode({ fromMobile, desktopCode, mobileCode }) {
  const [isMobile, setIsMobile] = useState(fromMobile)

  return (
    <>
      <Media
        defaultMatches={fromMobile}
        query={defaultQuery}
        onChange={matches => setIsMobile(matches)}
      />
      <Highlight
        {...defaultProps}
        language="json"
        theme={prismTheme}
        code={isMobile ? mobileCode : desktopCode}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="block text-sm leading-loose w-full lg:text-base">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: `code-line-${i}` })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  )
}
