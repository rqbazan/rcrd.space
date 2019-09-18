import { useState } from 'react'
import Media from 'react-media'
import { MobileContext } from 'src/contexts'
import { breakpoints } from 'src/theme'

const defaultQuery = {
  maxWidth: breakpoints.md
}

export default function MobileProvider(props) {
  const { fromMobile, children } = props

  const [isMobile, setIsMobile] = useState(fromMobile)

  return (
    <>
      <Media
        defaultMatches={fromMobile}
        query={defaultQuery}
        onChange={matches => setIsMobile(matches)}
      />
      <MobileContext.Provider value={isMobile}>
        {children}
      </MobileContext.Provider>
    </>
  )
}
