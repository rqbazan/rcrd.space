import * as React from 'react'
import clsx from 'clsx'
import { Typography } from '~/ui'

export interface LatestProjectProps {
  projectName: string
  logoIcon: React.ReactNode
  href: string
  className?: string
}

export function LatestProject({ projectName, logoIcon, href, className }: LatestProjectProps) {
  return (
    <a href={href} className="md:flex-1" target="_blank" rel="noreferrer">
      <div
        className={clsx(
          'h-24 flex items-center justify-center rounded-md transition-all transform md:hover:scale-105',
          className
        )}
      >
        {logoIcon}
        <Typography fontStyle="h5" fontWeight="semibold" className="text-body-dark ml-2">
          {projectName}
        </Typography>
      </div>
    </a>
  )
}
