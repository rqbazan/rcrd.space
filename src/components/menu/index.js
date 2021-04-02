import { NavItem } from '../nav-item'
import { Burger } from '../burger'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

export function Menu({ isOpen, router, onClose }) {
  return (
    <aside
      className="bg-body dark:bg-body-dark h-screen fixed right-0 top-0 w-full z-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="absolute flex items-center justify-end w-full h-16 px-6">
        <Burger closable onClick={onClose} />
      </div>
      <nav className="flex items-center flex-col justify-center w-full space-y-7">
        {menuItems.map(item => (
          <NavItem
            key={`mobile-menu-${item.href}`}
            className="text-2xl font-light min-h-[56px]"
            href={item.href}
            currentRoute={router.route}
            onClick={e => {
              e.preventDefault()

              if (router.route === item.href) {
                onClose()
              } else {
                router.push(item.href)
              }
            }}
          >
            {item.label}
          </NavItem>
        ))}
        <NavItem
          data-splitbee-event="View Resume"
          className="text-2xl font-light min-h-[56px]"
          href="https://resume.sxntixgo.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </NavItem>
      </nav>
    </aside>
  )
}
