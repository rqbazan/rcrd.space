'use client'
import { useServerInsertedHTML } from 'next/navigation'
import { getCssText } from '~/stitches.config'
import { globalStyles } from '~/ui/global-styles'

export function StylesRegister({ children }) {
  globalStyles()

  useServerInsertedHTML(() => {
    return <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  })

  return <>{children}</>
}
