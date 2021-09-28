import clsx from 'clsx'
import Link from 'next/link'

import { MainLogo } from '../logo'
import { MainNavLink } from '../nav-link'

export interface MainHeaderProps {
  className?: string
}

export function MainHeader({ className, ...props }: MainHeaderProps) {
  return (
    <header {...props} className={clsx(className, 'flex justify-between items-start')}>
      <MainLogo data-splitbee-event="Interact with Logo" />
      <nav className="flex space-x-4">
        <Link href="/" passHref>
          <MainNavLink data-splitbee-event="View Home">Home</MainNavLink>
        </Link>
        <Link href="/uses" passHref>
          <MainNavLink data-splitbee-event="View Uses">Uses</MainNavLink>
        </Link>
        <Link href="/projects" passHref>
          <MainNavLink data-splitbee-event="View Projects">Projects</MainNavLink>
        </Link>
        <MainNavLink href="https://resume.rcrd.space" data-splitbee-event="View Resume">
          CV
        </MainNavLink>
      </nav>
    </header>
  )
}
