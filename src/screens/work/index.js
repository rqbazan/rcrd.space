import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MainLayout from 'layouts/main'
import WorkPost from 'components/work-post'

export default function WorkScreen({ workPosts }) {
  return (
    <MainLayout>
      <div className="my-8 px-6 md:px-0 md:my-6">
        {workPosts.map(workPost => (
          <WorkPost
            key={workPost.title}
            className="mb-6 last:mb-0"
            {...workPost}
          >
            <ReactMarkdown
              source={workPost.body}
              escapeHtml={false}
              renderers={{
                link: props => (
                  <a href={props.href} rel="noreferrer" target="__blank">
                    {props.children}
                  </a>
                )
              }}
            />
          </WorkPost>
        ))}
      </div>
    </MainLayout>
  )
}
