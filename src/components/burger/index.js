import clsx from 'clsx'
import { Icon } from '../icon'

export function Burger({ onClick, closable, className, ...props }) {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      className={clsx('text-title dark:text-title-dark', className)}
      {...props}
    >
      <Icon name={closable ? 'times' : 'menu'} size={32} />
    </div>
  )
}
