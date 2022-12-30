import { RepoFragment } from '@/codegen/types'

export function getSortedTags(repository: RepoFragment) {
  const tags = repository.repositoryTopics?.nodes?.map(node => node.topic.name)

  if (typeof repository.primaryLanguage?.name === 'string') {
    tags.push(repository.primaryLanguage.name)
  }

  return tags.sort()
}
