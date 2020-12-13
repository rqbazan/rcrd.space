import React, { useState, useEffect } from 'react'
import Storage from '~/utils/storage-manager'
import NightModeSwith from '../night-mode-switch'

const STORAGE_KEY = 'prefers-night-mode'

export default function NightModeToggle(props) {
  const [checked, setChecked] = useState(() => {
    return Storage.get(STORAGE_KEY, false)
  })

  function onCheckedChange(isChecked) {
    setChecked(isChecked)

    Storage.set(STORAGE_KEY, isChecked)

    if (isChecked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    onCheckedChange(Storage.get(STORAGE_KEY, false))
  }, [])

  return (
    <NightModeSwith
      {...props}
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  )
}
