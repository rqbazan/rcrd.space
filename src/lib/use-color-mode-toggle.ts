import * as React from 'react'

export const STORAGE_KEY = 'color-mode'

export const colorModes = ['dark', 'light'] as const

export type ColorMode = typeof colorModes[number]

export function useColorModeToggle() {
  const [colorMode, setColorMode] = React.useState<ColorMode>(() => {
    if (typeof localStorage === 'undefined') {
      return null
    }

    return localStorage.getItem(STORAGE_KEY) as ColorMode
  })

  React.useEffect(() => {
    if (colorMode) {
      localStorage.setItem(STORAGE_KEY, colorMode)
    }
  }, [colorMode])

  function onToggle() {
    setColorMode(c => (c === 'dark' ? 'light' : 'dark'))
  }

  return { colorMode, onToggle }
}
