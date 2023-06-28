import Link from 'next/link'
import clsx from 'clsx'
import {
  FileText as FileTextIconSvg,
  HardDrive as HardDriveIconSvg,
  Home as HomeIconSvg,
  Terminal as TerminalIconSvg,
} from 'react-feather'
import { Logo } from '../logo'
import { NavLink } from '../nav-link'

export interface HeaderProps {
  className?: string
}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header {...props} className={clsx(className, 'flex justify-between items-start')}>
      <Logo data-splitbee-event="Interact with Logo" />
      <nav className="flex space-x-4">
        <Link href="/" passHref legacyBehavior>
          <NavLink aria-label="Home">
            <HomeIconSvg />
          </NavLink>
        </Link>
        <Link href="/uses" passHref legacyBehavior>
          <NavLink aria-label="Uses">
            <HardDriveIconSvg />
          </NavLink>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <NavLink aria-label="Projects">
            <TerminalIconSvg />
          </NavLink>
        </Link>
        <NavLink
          href="https://resume.rcrd.space"
          data-splitbee-event="View Resume"
          aria-label="Resume"
        >
          <FileTextIconSvg />
        </NavLink>
      </nav>
    </header>
  )
}
