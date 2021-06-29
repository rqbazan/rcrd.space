import * as React from 'react'
import clsx from 'clsx'
import { Icon } from '~/components/icon'
import { Burger } from '~/components/burger'
import { Menu } from '~/components/menu'
import { NightModeToggle } from '~/components/night-mode-toggle'
import { UPButton } from '~/components/up-button'
import { Navigation } from '~/components/navigation'

export function MainLayout({ children, single, techProfile }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  return (
    <>
      <header className="px-6 items-center justify-center shadow-sm flex flex-col fixed top-0 inset-x-0 z-40 md:px-0 h-16 backdrop-filter backdrop-blur-sm text-title dark:text-title-dark bg-gray-transparent dark:bg-transparent">
        <div className="h-2 fixed top-0 inset-x-0 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-500 dark:from-blue-700 dark:via-purple-500" />
        <div className="pt-2 flex items-center justify-between h-full md:px-8 lg:px-0 max-w-3xl w-full">
          <Navigation className="hidden md:flex h-full" />
          <NightModeToggle />
          <Burger className="md:hidden" onClick={() => setMenuIsOpen(true)} />
        </div>
      </header>
      <Menu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />
      <main className="flex w-full pt-16 min-h-full md:mx-auto md:max-w-3xl md:px-8 lg:px-0">
        {children}
      </main>
      {!single && (
        <>
          <footer className="flex w-full md:mx-auto md:max-w-3xl md:px-8 lg:px-0 space-x-8 items-center justify-center pt-4 pb-10">
            {['github', 'linkedin', 'twitter'].map(icon => (
              <a
                key={icon}
                href={techProfile[icon]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
                className="text-accent dark:text-accent-dark"
                data-splitbee-event="View Social Network"
                data-splitbee-event-network={icon}
              >
                <Icon name={icon} className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            ))}
          </footer>
          <div className="fixed bottom-0 right-0 mr-4 mb-4 lg:mr-8 lg:mb-8">
            <UPButton />
          </div>
        </>
      )}
    </>
  )
}

MainLayout.Content = function MainLayoutContent({ children, className }) {
  return (
    <div className={clsx('my-5 md:my-7 px-6 md:px-0 w-full', className)}>
      {children}
    </div>
  )
}
