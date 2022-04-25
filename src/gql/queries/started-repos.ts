import gql from 'graphql-tag'

export default gql`
  fragment Repo on Repository {
    id
    name
    description
    homepageUrl
    primaryLanguage {
      id
      name
    }
  }

  fragment Issue on Issue {
    title
    bodyHTML
  }

  fragment Topic on Topic {
    id
    name
  }

  query startedRepos {
    viewer {
      starredRepositories(first: 100, ownedByViewer: true) {
        nodes {
          ...Repo
          pinnedIssues(first: 5) {
            nodes {
              id
              issue {
                ...Issue
              }
            }
          }
          repositoryTopics(first: 10) {
            nodes {
              id
              topic {
                ...Topic
              }
            }
          }
        }
      }
    }
  }
`
