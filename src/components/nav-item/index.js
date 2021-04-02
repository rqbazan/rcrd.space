import * as React from 'react'
import clsx from 'clsx'

export const NavItem = React.forwardRef(
  (
    {
      children,
      href,
      currentRoute,
      className,
      as: Component = 'div',
      ...props
    },
    ref
  ) => {
    const isActive = href === currentRoute

    return (
      <Component
        className={clsx('inline-flex items-center relative', className)}
      >
        <a
          className={clsx('h-full flex items-center', {
            'font-semibold': isActive
          })}
          ref={ref}
          href={href}
          {...props}
        >
          {children}
        </a>
        {isActive && (
          <span className="h-[3px] bg-gradient-to-r from-accent via-yellow-500 to-red-500 dark:from-accent-dark dark:via-purple-500 absolute bottom-0 rounded-lg -right-1 -left-1">
            <span className="invisible">{children}</span>
          </span>
        )}
      </Component>
    )
  }
)
