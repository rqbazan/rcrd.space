import { useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { MobileContext } from 'src/contexts'
import data from 'src/data.json'
import prismTheme from './prism-theme'
import { Pre } from './elements'

const curlyBracketsIdentation = /^[{}]?\s{0,5}/gm

const desktopCode = JSON.stringify(data.profile, null, 4)
const mobileCode = desktopCode.replace(curlyBracketsIdentation, '').trim()

export default function HighlightCode() {
  const isMobile = useContext(MobileContext)

  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={isMobile ? mobileCode : desktopCode}
      language="json"
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: `code-line-${i}` })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
