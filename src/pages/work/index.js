import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import data from 'src/data.json'
import SEO from '~/components/seo'
import MainLayout from '~/layouts/main'
import WorkPost from '~/components/work-post'
import UPButton from '~/components/up-button'

function Link({ href, children }) {
  return (
    <a href={href} rel="noreferrer" target="__blank">
      {children}
    </a>
  )
}

export default function WorkPage() {
  return (
    <>
      <SEO title="Thing I’ve worked" />
      <MainLayout>
        <div className="my-8 px-6 md:px-0 md:my-6">
          {data.workPosts.map(workPost => (
            <WorkPost
              key={workPost.title}
              className="mb-8 last:mb-0"
              {...workPost}
            >
              <ReactMarkdown
                source={workPost.body}
                escapeHtml={false}
                renderers={{ link: Link }}
              />
            </WorkPost>
          ))}
        </div>
        <div className="fixed bottom-0 right-0 mr-4 mb-4 lg:mr-8 lg:mb-8">
          <UPButton />
        </div>
      </MainLayout>
    </>
  )
}
