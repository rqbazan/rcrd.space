/* eslint no-bitwise: 0 */
import styles from './styles.module.css'

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash)
    hash &= hash
  }

  return hash
}

export function Tag({ children }) {
  const hash = getHashCode(children) % 360

  return (
    <span style={{ '--hash': hash }} className={styles.tag}>
      {children}
    </span>
  )
}
