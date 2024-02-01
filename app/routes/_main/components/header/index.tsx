import clsx from "clsx"
import {
  FileText as FileTextIconSvg,
  HardDrive as HardDriveIconSvg,
  Home as HomeIconSvg,
  Terminal as TerminalIconSvg,
} from "react-feather"
import { Logo } from "../logo"
import { NavLink } from "../nav-link"

export interface HeaderProps {
  className?: string
}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={clsx(className, "flex justify-between items-start")}
    >
      <Logo data-splitbee-event="Interact with Logo" />
      <nav className="flex space-x-4">
        <NavLink to="/" aria-label="Home">
          <HomeIconSvg />
        </NavLink>
        <NavLink to="/uses" aria-label="Uses">
          <HardDriveIconSvg />
        </NavLink>
        <NavLink to="/projects" aria-label="Projects">
          <TerminalIconSvg />
        </NavLink>
        <NavLink
          to="https://resume.rcrd.space"
          data-splitbee-event="View Resume"
          aria-label="Resume"
        >
          <FileTextIconSvg />
        </NavLink>
      </nav>
    </header>
  )
}
