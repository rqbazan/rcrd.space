import React from 'react'
import ReactMarkdown from 'react-markdown'
import MainLayout from 'layouts/main'
import WorkPost from 'components/work-post'
import data from 'src/data.json'
import { WorkPostsContainer } from './elements'

export default function WorkScreen() {
  return (
    <MainLayout>
      <WorkPostsContainer>
        {data.workPosts.map(workPost => (
          <WorkPost key={workPost.title} {...workPost}>
            <ReactMarkdown source={workPost.body} linkTarget="_blank" />
          </WorkPost>
        ))}
      </WorkPostsContainer>
    </MainLayout>
  )
}
