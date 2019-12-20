import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import data from 'src/data.json'
import SEO from '~/components/seo'
import MainLayout from '~/layouts/main'
import WorkPost from '~/components/work-post'

export default function WorkPage() {
  return (
    <>
      <SEO title="Thing I’ve worked" />
      <MainLayout>
        <div className="my-8 px-6 md:px-0 md:my-6">
          {data.workPosts.map(workPost => (
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
    </>
  )
}
