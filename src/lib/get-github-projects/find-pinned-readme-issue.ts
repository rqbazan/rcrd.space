import { RepoFragment } from '@/codegen/types'

const README_WORD_REGEX = /readme/i

export function findPinnedReadmeIssue(repository: RepoFragment) {
  const issueNode = repository.pinnedIssues?.nodes?.find(
    node => node.issue.locked && README_WORD_REGEX.test(node.issue.title)
  )

  return issueNode?.issue
}
