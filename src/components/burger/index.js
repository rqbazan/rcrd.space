import clsx from 'clsx'
import { Icon } from '../icon'

export function Burger({ onClick, closable, className, ...props }) {
  return (
    <button
      onClick={onClick}
      onKeyPress={onClick}
      aria-label={`${closable ? 'Close' : 'Open'} Menu`}
      className={clsx('text-title dark:text-title-dark', className)}
      {...props}
    >
      <Icon name={closable ? 'times' : 'menu'} size={32} />
    </button>
  )
}
