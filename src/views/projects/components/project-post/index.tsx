import * as React from 'react'
import clsx from 'clsx'
import kebabCase from 'just-kebab-case'
import { useRouter } from 'next/router'

import { styled } from '~/stitches.config'
import { AnchorIcon, BaseTypography, Typography } from '~/ui'

import { TechTag } from '../tech-tag'

export interface ProjectPostProps {
  projectName: string
  content: string | React.ReactNode
  techs: string[]
  className?: string
  links?: Array<{
    href: string
    icon: React.ComponentType<any>
    [key: string]: unknown
  }>
}

const TitleBox = styled('div', {
  [`& > ${BaseTypography}:hover + span`]: {
    display: 'inline-block',
  },
})

export function ProjectPost({ projectName, content, techs, links, className }: ProjectPostProps) {
  const router = useRouter()

  const htmlId = kebabCase(projectName.toLowerCase())

  return (
    <div className={clsx('-mt-6 pt-6', className)} id={htmlId}>
      <div className="flex flex-col">
        <TitleBox
          className="flex relative mb-6"
          onClick={() => {
            router.push(`${router.pathname}/#${htmlId}`)
          }}
        >
          <Typography fontStyle="h5">{projectName}</Typography>
          <span className="hidden absolute -left-4 -top-2 text-muted">#</span>
        </TitleBox>
        <Typography>{content}</Typography>
      </div>
      <div className="flex mt-4">
        <div className="flex mr-1 flex-wrap gap-2">
          {Array.from(techs)
            .sort()
            .map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
        </div>
        {links?.length > 0 && (
          <div className="flex gap-3 ml-auto items-start">
            {links.map(({ href, icon, ...rest }) => (
              <AnchorIcon key={href} href={href} {...rest}>
                {React.createElement(icon, { className: 'h-5 w-5' })}
              </AnchorIcon>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
