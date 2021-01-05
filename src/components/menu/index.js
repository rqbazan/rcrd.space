import { useRouter } from 'next/router'
import Burger from '../burger'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

export default function Menu({ isOpen, onClose }) {
  const router = useRouter()

  return (
    <aside
      className="bg-body dark:bg-body-dark h-screen fixed right-0 top-0 w-full z-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="absolute flex items-center justify-end w-full h-16 px-6">
        <Burger closable onClick={onClose} />
      </div>
      <nav className="flex items-center flex-col justify-center w-full space-y-10">
        {menuItems.map(item => (
          <a
            className="text-2xl font-light"
            key={`mobile-menu-${item.href}`}
            href={item.href}
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
          </a>
        ))}
        <a
          className="text-2xl font-light"
          href="/resume.pdf"
          target="__blank"
          rel="noopener"
        >
          Resume
        </a>
      </nav>
    </aside>
  )
}
