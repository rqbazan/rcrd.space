import * as React from 'react'
import kebabCase from 'just-kebab-case'
import { AnchorIcon } from '~/ui/components/anchor-icon'
import { NewTag } from '~/ui/components/new-tag'
import { Typography } from '~/ui/components/typography'
import { dateDiffInDays } from '~/utils/date-diff-in-days'
import { TechTag } from '../tech-tag'

export interface ProjectPostProps {
  projectName: string
  postedAt?: string
  content: string | React.ReactNode
  techs: string[]
  className?: string
  links?: Array<{
    href: string
    icon: React.ComponentType<any>
    [key: string]: unknown
  }>
}

const MAX_DAYS_TO_BE_NEW = 30

function isNew(postedAt?: string) {
  if (!postedAt) {
    return false
  }

  const diffInDays = dateDiffInDays(new Date(postedAt))

  return diffInDays <= MAX_DAYS_TO_BE_NEW
}

export function ProjectPost({
  projectName,
  postedAt,
  content,
  techs,
  links,
  className,
}: ProjectPostProps) {
  const htmlId = kebabCase(projectName.toLowerCase())

  return (
    <div className={className} id={htmlId}>
      <div className="flex flex-col">
        <div className="flex items-center cursor-pointer self-start">
          <Typography fontStyle="h5">{projectName}</Typography>
          {isNew(postedAt) && <NewTag className="ml-1 -mt-2" />}
        </div>
        <Typography className="mt-4">{content}</Typography>
      </div>
      <div className="flex mt-4">
        <div className="flex mr-1 flex-wrap -m-1">
          {Array.from(techs)
            .sort()
            .map(tech => (
              <TechTag key={tech} className="m-1">
                {tech}
              </TechTag>
            ))}
        </div>
        {links?.length > 0 && (
          <div className="flex space-x-3 ml-auto items-start">
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
