import * as React from 'react'
import NightModeSwith from '../night-mode-switch'

const STORAGE_KEY = 'color-mode'

export default function NightModeToggle(props) {
  const initialChecked =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(STORAGE_KEY) === 'dark'
      : false

  const [checked, setChecked] = React.useState(initialChecked)

  function onCheckedChange(isChecked) {
    setChecked(isChecked)

    const colorMode = isChecked ? 'dark' : 'light'

    localStorage.setItem(STORAGE_KEY, colorMode)

    if (isChecked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (typeof splitbee !== 'undefined') {
      window.splitbee.track('Change Color Mode', { colorMode })
    }
  }

  return (
    <NightModeSwith
      {...props}
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  )
}
