import clsx from 'clsx'
import Icon from '../icon'

export default function Burger({ onClick, closable, className, ...props }) {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      className={clsx('text-wording dark:text-wording-dark', className)}
      {...props}
    >
      <Icon name={closable ? 'times' : 'menu'} size={32} />
    </div>
  )
}
