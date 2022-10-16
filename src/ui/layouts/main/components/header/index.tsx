import Link from 'next/link'
import clsx from 'clsx'
import {
  FileText as FileTextIconSvg,
  HardDrive as HardDriveIconSvg,
  Home as HomeIconSvg,
  Terminal as TerminalIconSvg,
} from 'react-feather'
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
          <MainNavLink aria-label="Home">
            <HomeIconSvg />
          </MainNavLink>
        </Link>
        <Link href="/uses" passHref>
          <MainNavLink aria-label="Uses">
            <HardDriveIconSvg />
          </MainNavLink>
        </Link>
        <Link href="/projects" passHref>
          <MainNavLink aria-label="Projects">
            <TerminalIconSvg />
          </MainNavLink>
        </Link>
        <MainNavLink
          href="https://resume.rcrd.space"
          data-splitbee-event="View Resume"
          aria-label="Resume"
        >
          <FileTextIconSvg />
        </MainNavLink>
      </nav>
    </header>
  )
}
