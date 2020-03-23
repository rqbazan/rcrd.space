import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from './prism-theme'

export default function HighlightCode({ profile }) {
  return (
    <Highlight
      {...defaultProps}
      language="json"
      theme={prismTheme}
      code={profile}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="block text-sm leading-loose w-full">
          {tokens.map((line, i) => (
            <div
              {...getLineProps({
                line,
                key: `code-line-${i}`
              })}
            >
              {line.map((token, key) => {
                const tokenProps = getTokenProps({
                  token,
                  key,
                  className: 'code'
                })

                if (token.content !== '        ') {
                  return <span {...tokenProps} />
                }

                const newKey = `fragment-${key}`
                tokenProps.children = '    '
                delete tokenProps.key

                // the empty string token must be split on two part
                // so the first one will be easily CSS manipulable
                return (
                  <React.Fragment key={newKey}>
                    <span {...tokenProps} />
                    <span {...tokenProps} />
                  </React.Fragment>
                )
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
