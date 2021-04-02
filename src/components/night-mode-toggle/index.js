import * as React from 'react'
import { NightModeSwitch } from '../night-mode-switch'

const STORAGE_KEY = 'color-mode'

export function NightModeToggle(props) {
  const initialChecked =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(STORAGE_KEY) === 'dark'
      : false

  const [checked, setChecked] = React.useState(initialChecked)

  function onCheckedChange(isChecked) {
    setChecked(isChecked)

    const mode = isChecked ? 'dark' : 'light'

    localStorage.setItem(STORAGE_KEY, mode)

    if (isChecked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (typeof splitbee !== 'undefined') {
      window.splitbee.track('Change Color Mode', { mode })
    }
  }

  return (
    <NightModeSwitch
      {...props}
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  )
}
