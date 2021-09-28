import * as React from 'react'
import clsx from 'clsx'

import { GithubSvg, LinkedinSvg, MailSvg, TwitterSvg } from '~/ui'

export interface MainFooterProps {
  className?: string
}

type Contact = {
  icon: React.ComponentType<any>
  href: string
  network: string
}

const contacts: Contact[] = [
  {
    icon: GithubSvg,
    network: 'github',
    href: 'https://github.com/rqbazan',
  },
  {
    icon: TwitterSvg,
    network: 'twitter',
    href: 'https://twitter.com/rqbazan',
  },
  {
    icon: LinkedinSvg,
    network: 'linkedin',
    href: 'https://www.linkedin.com/in/rqbazan',
  },
  {
    icon: MailSvg,
    network: 'mail',
    href: 'mailto:raquirozbazan@gmail.com',
  },
]

export function MainFooter({ className, ...props }: MainFooterProps) {
  return (
    <footer
      {...props}
      className={clsx('flex justify-center items-center space-x-4 mt-auto pt-16', className)}
    >
      {contacts.map(contact => (
        <a
          key={contact.network}
          href={contact.href}
          className="hover:text-muted transition-colors"
          target="_blank"
          rel="noreferrer"
          data-splitbee-event="View Social Network"
          data-splitbee-event-network={contact.network}
        >
          {React.createElement(contact.icon, { className: 'h-6 w-6' })}
        </a>
      ))}
    </footer>
  )
}
