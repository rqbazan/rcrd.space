import React from 'react'
import Icon from '../icon'
import Tag from '../tag'

export default function WorkPost({
  title,
  startDate,
  endDate,
  tags,
  links,
  className,
  children
}) {
  return (
    <section className={`flex flex-wrap w-full ${className}`}>
      <div className="text-xs mr-4 text-center w-10 lg:pt-1 lg:w-20 text-text">
        <span>{endDate}</span>
        {startDate && (
          <>
            <br />
            |
            <br />
            <span>{startDate}</span>
          </>
        )}
      </div>
      <div className="flex flex-col flex-1 lg:flex-row">
        <article className="flex-1 lg:mr-6">
          <header className="flex text-lg font-bold mb-2 uppercase">
            {title}
          </header>
          {children}
        </article>
        <div className="mt-2 lg:mt-0 lg:w-1/3">
          <nav className="flex w-full mb-3 md:justify-end space-x-2">
            {Object.keys(links)
              .sort()
              .map(iconName => (
                <a
                  href={links[iconName]}
                  key={links[iconName]}
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
            {tags.split(',').map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
