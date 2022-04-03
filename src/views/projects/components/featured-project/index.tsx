import * as React from 'react'
import clsx from 'clsx'
import { Typography } from '~/ui'

export interface FeturedProjectProps {
  projectName: string
  logoIcon: React.ReactElement
  href: string
  className?: string
}

export function FeaturedProject({ projectName, logoIcon, href, className }: FeturedProjectProps) {
  return (
    <a href={href} className="md:flex-1" target="_blank" rel="noreferrer">
      <div
        className={clsx(
          'h-24 flex items-center justify-center rounded-md transition-all transform md:hover:scale-105',
          className
        )}
      >
        {React.cloneElement(logoIcon, { className: 'lg:scale-[1.3] lg:mr-0.5' })}
        <Typography fontStyle="h5" fontWeight="semibold" className="text-body-dark ml-2">
          {projectName}
        </Typography>
      </div>
    </a>
  )
}
