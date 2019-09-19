import MainLayout from 'layouts/main'
import WorkPost from 'components/work-post'
import data from 'src/data.json'
import { WorkPostsContainer } from './elements'

export default function WorkScreen() {
  return (
    <MainLayout>
      <WorkPostsContainer>
        {data.workPosts.map(workPost => (
          <WorkPost key={workPost.title} {...workPost} />
        ))}
      </WorkPostsContainer>
    </MainLayout>
  )
}
