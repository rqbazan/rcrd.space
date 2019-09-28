import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import MainLayout from 'layouts/main'
import WorkPost from 'components/work-post'
import { WorkPostsContainer } from './elements'

export default function WorkScreen({ workPosts }) {
  return (
    <MainLayout>
      <WorkPostsContainer>
        {workPosts.map(workPost => (
          <WorkPost key={workPost.title} {...workPost}>
            <ReactMarkdown
              source={workPost.body}
              escapeHtml={false}
              linkTarget="_blank"
            />
          </WorkPost>
        ))}
      </WorkPostsContainer>
    </MainLayout>
  )
}
