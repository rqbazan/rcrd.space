function decorator(fn) {
  return (...args) => {
    try {
      return fn(...args)
    } catch (e) {
      console.error('localStorage is disabled or unsupported')
      return undefined
    }
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
