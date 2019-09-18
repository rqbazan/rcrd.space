import MainLayout from 'layouts/main'
import WorkPost from 'components/work-post'
import data from 'src/data.json'

export default function WorkScreen() {
  return (
    <MainLayout style={{ flexDirection: 'column' }}>
      {data.workPosts.map(workPost => (
        <WorkPost key={workPost.title} {...workPost} />
      ))}
    </MainLayout>
  )
}
