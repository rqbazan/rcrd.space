import React from 'react'
import clsx from 'clsx'
import Icon from '../icon'
import Tag from '../tag'

export default function TechProject({
  className,
  name,
  endAt,
  startAt,
  tags,
  accessInfo,
  description,
  isLTS
}) {
  return (
    <section className={clsx('flex flex-wrap w-full', className)}>
      <div className="text-xs mr-4 text-center w-10 lg:pt-1 lg:w-20">
        <span>{isLTS ? '∞' : endAt || '[WIP]'}</span>
        {(endAt !== startAt || isLTS) && (
          <>
            <br />
            |
            <br />
            <span>{startAt}</span>
          </>
        )}
      </div>
      <div className="flex flex-col flex-1 lg:flex-row">
        <article className="flex-1 lg:mr-6">
          <header className="flex text-lg font-bold mb-2 uppercase">
            {name}
          </header>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </article>
        <div className="mt-2 lg:mt-0 lg:w-1/3">
          <nav className="flex w-full mb-3 md:justify-end space-x-2">
            {Object.keys(accessInfo)
              .sort()
              .filter(iconName => typeof accessInfo[iconName] === 'string')
              .map(iconName => (
                <a
                  href={accessInfo[iconName]}
                  key={accessInfo[iconName]}
                  target="__blank"
                  rel="noopener"
                  aria-label={iconName}
                  className="lg:p-0"
                >
                  <Icon size={32} name={iconName} />
                </a>
              ))}
          </nav>
          <div className="flex flex-wrap w-full md:justify-end -m-1 lg:m-0">
            {tags.map(tag => (
              <Tag key={tag.name}>{tag.name}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
