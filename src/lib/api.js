import mdToHtml from '@rqbazan/md-to-html'
import externalLinks from 'remark-external-links'
import data from '~/data.json'

export async function getProfile() {
  return data.profile
}

export async function getSocialLinks() {
  return data.socialLinks
}

export async function getWorkPost() {
  return data.workPosts.map(workPost => ({
    ...workPost,
    body: mdToHtml()
      .use(externalLinks, { rel: ['noopener', 'noreferrer'] })
      .processSync(workPost.body)
      .toString()
  }))
}
