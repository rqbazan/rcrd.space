import { RepoFragment } from '~/gql/types'
import { ProjectLinkType } from '~/types/project'

function inferProjectLinkType(url: string): ProjectLinkType {
  if (url.includes('figma')) {
    return 'figma'
  }

  if (url.includes('npm')) {
    return 'package'
  }

  if (url.includes('github')) {
    return 'github'
  }

  if (url.includes('excalidraw')) {
    return 'drawing'
  }

  return 'homepage'
}

export function getProjectLinks(repository: RepoFragment, extraLinks: string[]) {
  let links: string[] = []

  if (typeof repository.homepageUrl === 'string') {
    links.push(repository.homepageUrl)
  }

  if (Array.isArray(extraLinks)) {
    links = links.concat(extraLinks)
  }

  return links.map(url => ({
    url,
    type: inferProjectLinkType(url),
  }))
}
