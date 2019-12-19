import { mutateSource } from 'gatsby-remark-twemoji-shortcut'
import data from 'src/data.json'

function remarkTwemoji(markdown) {
  const markdownNode = {
    internal: {
      content: markdown.slice()
    }
  }

  mutateSource({ markdownNode })

  return markdownNode.internal.content
}

export default (_, res) => {
  const workPosts = data.workPosts.map(workPost => {
    return {
      ...workPost,
      body: remarkTwemoji(workPost.body)
    }
  })

  res.json({ workPosts })
}
