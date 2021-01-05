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

    localStorage.setItem(STORAGE_KEY, isChecked ? 'dark' : 'light')

    if (isChecked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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
