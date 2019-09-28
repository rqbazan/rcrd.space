import remarkTwemoji from 'src/remark-twemoji'
import data from 'src/data.json'

export default (_, res) => {
  const workPosts = data.workPosts.map(workPost => {
    return {
      ...workPost,
      body: remarkTwemoji(workPost.body)
    }
  })

  res.json({ workPosts })
}
