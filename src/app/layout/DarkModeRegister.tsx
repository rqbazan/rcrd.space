'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { getJsText } from '@rqbazan/set-initial-color-mode'

export function DarkModeRegister({ children }) {
  useServerInsertedHTML(() => {
    return <script id="set-initial-color-mode" dangerouslySetInnerHTML={{ __html: getJsText() }} />
  })

  return <>{children}</>
}
