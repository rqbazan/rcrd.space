import data from '~/data.json'

export async function getProfile() {
  return data.profile
}

export async function getSocialLinks() {
  return data.socialLinks
}

export async function getWorkPost() {
  return data.workPosts
}
