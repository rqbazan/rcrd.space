import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavItem } from '../nav-item'

export function Navigation({ className }) {
  const router = useRouter()

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-8">
        <Link href="/" passHref>
          <NavItem currentRoute={router.route}>About</NavItem>
        </Link>
        <Link href="/work" passHref>
          <NavItem currentRoute={router.route}>Work</NavItem>
        </Link>
        <NavItem
          data-splitbee-event="View Resume"
          href="https://resume.sxntixgo.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </NavItem>
      </ul>
    </nav>
  )
}
