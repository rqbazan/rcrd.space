import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styles from './styles.module.css'

export default function HighlightJson({ data, identation = 4 }) {
  return (
    <Highlight
      {...defaultProps}
      language="json"
      theme={{ styles: [] }}
      code={JSON.stringify(data, null, identation)}
    >
      {({ tokens: tokensMatrix, getLineProps, getTokenProps }) => (
        <pre className={styles.container}>
          {tokensMatrix.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: `ln-${i}` })}>
                {line.map((token, ii) => {
                  const tokenProps = getTokenProps({ token, key: `tk-${ii}` })

                  const { content } = token

                  const isIdentation = /^ *$/g.test(content)
                  const isNested = content.length > identation

                  if (!isIdentation || !isNested) {
                    return <span {...tokenProps} />
                  }

                  // the nested identation token must be split on two part
                  // so the first one will be easily CSS manipulable
                  const { key: tokenKey, ...rest } = tokenProps
                  rest.children = content.substr(0, content.length / 2)

                  return (
                    <React.Fragment key={tokenKey}>
                      <span {...rest} />
                      <span {...rest} />
                    </React.Fragment>
                  )
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
