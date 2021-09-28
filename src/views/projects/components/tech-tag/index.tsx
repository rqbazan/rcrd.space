/* eslint no-bitwise: 0 */
import { Typography } from '~/ui'

import styles from './styles.module.css'

export interface TechTagProps {
  children: string
}

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string: string) {
  let hash = 0

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash)
    hash &= hash
  }

  return hash
}

export function TechTag({ children }: TechTagProps) {
  const hash = getHashCode(children) % 360

  return (
    // @ts-expect-error
    <span style={{ '--hash': hash }} className={styles.tag}>
      <Typography fontStyle="small">{children}</Typography>
    </span>
  )
}
