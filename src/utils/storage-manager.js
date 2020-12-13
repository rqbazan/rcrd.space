import storageAvailable from 'storage-available'

function decorator(fn) {
  return (...args) => {
    return storageAvailable('localStorage') ? fn(...args) : undefined
  }
}

export default {
  get: decorator((key, defaultValue) => {
    return key in localStorage
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue
  }),
  set: decorator((key, value) => {
    localStorage.setItem(key, value)
  })
}
