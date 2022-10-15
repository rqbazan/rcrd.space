import { createClient } from 'urql'
import env from '~/env'
import startedReposQuery from '~/gql/queries/started-repos'
import type { RepoFragment, StartedReposQuery } from '~/gql/types'
import { Project } from '~/types/project'
import { findPinnedReadmeIssue } from './find-pinned-readme-issue'
import { getProjectLinks } from './get-project-links'
import { getSortedTags } from './get-sorted-tags'
import { processIssue } from './proccess-issue'

const gqlClient = createClient({
  url: env.GITHUB_API_URL,
  fetchOptions: () => ({
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
    },
  }),
})

function convertToProject(repository: RepoFragment): Project {
  const readmeIssue = findPinnedReadmeIssue(repository)

  if (!readmeIssue) {
    return null
  }

  const tags = getSortedTags(repository)
  const { descriptionHTML, extraLinks } = processIssue(readmeIssue)
  const links = getProjectLinks(repository, extraLinks)

  return {
    id: repository.id,
    title: repository.name,
    descriptionHTML,
    tags,
    links,
  }
}

export async function getGithubProjects() {
  const { data } = await gqlClient.query<StartedReposQuery>(startedReposQuery, {}).toPromise()

  return data.viewer.starredRepositories?.nodes?.map(convertToProject).filter(Boolean)
}
