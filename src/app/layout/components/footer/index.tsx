import * as React from 'react'
import clsx from 'clsx'
import {
  GitHub as GitHubSvgIcon,
  Linkedin as LinkedinSvgIcon,
  Mail as MailSvgIcon,
  Twitter as TwitterSvgIcon,
} from 'react-feather'
import { AnchorIcon } from '~/ui/components/anchor-icon'

export interface FooterProps {
  className?: string
}

type Contact = {
  icon: React.ComponentType<any>
  href: string
  network: string
}

const contacts: Contact[] = [
  {
    icon: GitHubSvgIcon,
    network: 'github',
    href: 'https://github.com/rqbazan',
  },
  {
    icon: TwitterSvgIcon,
    network: 'twitter',
    href: 'https://twitter.com/rqbazan',
  },
  {
    icon: LinkedinSvgIcon,
    network: 'linkedin',
    href: 'https://www.linkedin.com/in/rqbazan',
  },
  {
    icon: MailSvgIcon,
    network: 'mail',
    href: 'mailto:raquirozbazan@gmail.com',
  },
]

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer {...props} className={clsx('flex justify-center items-center space-x-4', className)}>
      {contacts.map(contact => (
        <AnchorIcon
          key={contact.network}
          href={contact.href}
          aria-label={contact.network}
          data-splitbee-event="View Social Network"
          data-splitbee-event-network={contact.network}
        >
          {React.createElement(contact.icon, { className: 'h-6 w-6' })}
        </AnchorIcon>
      ))}
    </footer>
  )
}
