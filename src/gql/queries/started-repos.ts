import gql from 'graphql-tag'

export default gql`
  fragment Issue on Issue {
    title
    bodyHTML
    locked
  }

  fragment Topic on Topic {
    id
    name
  }

  fragment Repo on Repository {
    id
    name
    description
    homepageUrl
    primaryLanguage {
      id
      name
    }
    pinnedIssues(first: 3) {
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

  query startedRepos {
    viewer {
      starredRepositories(first: 100, ownedByViewer: true) {
        nodes {
          ...Repo
        }
      }
    }
  }
`
