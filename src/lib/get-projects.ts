import { createClient } from 'urql'
import env from '~/env'
import startedRepos from '~/gql/queries/started-repos'
import type { StartedReposQuery } from '~/gql/types'

const client = createClient({
  url: env.GITHUB_API_URL,
  fetchOptions: () => ({
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
    },
  }),
})

export async function getProjects() {
  const { data } = await client.query<StartedReposQuery>(startedRepos).toPromise()
  return data
}
