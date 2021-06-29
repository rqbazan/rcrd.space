import * as React from 'react'
import clsx from 'clsx'

export const NavItem = React.forwardRef(function NavItem(
  { children, href, currentRoute, className, ...props },
  ref
) {
  const isActive = href === currentRoute

  return (
    <li className="inline-flex items-center justify-center relative text-2xl md:text-base md:font-normal min-h-[56px] md:min-h-[unset]">
      <a
        ref={ref}
        href={href}
        className={clsx('h-full flex items-center', {
          'font-semibold': isActive,
        })}
        {...props}
      >
        {children}
      </a>
      {isActive && (
        <span className="h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500 dark:from-blue-700 dark:via-purple-500 absolute bottom-0 rounded-lg -right-1 -left-1">
          <span className="invisible">{children}</span>
        </span>
      )}
    </li>
  )
})
