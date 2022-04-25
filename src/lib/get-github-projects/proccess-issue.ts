import { IssueFragment } from '~/gql/types'

const ISSUE_BODY_REGEX = /<h\d[^>]*>[\w\s]+<\/h\d>/g
const EXTRA_LINK_REGEX = /href=\\?"([^"]*)"/g
const TITLE_REGEX = /<\w[^>]*>([^<]*)<\/\w[^>]*>/

export function processIssue(issue: IssueFragment) {
  const { bodyHTML } = issue

  const headingMatches = Array.from(bodyHTML.matchAll(ISSUE_BODY_REGEX)) as RegExpMatchArray[]

  const [titleHeadingMatch, descriptionHeadingMatch, extraLinksHeadingMatch] = headingMatches

  const titleStartIndex = titleHeadingMatch[0].length
  const titleEndIndex = descriptionHeadingMatch.index
  const titleHTML = bodyHTML.slice(titleStartIndex, titleEndIndex)
  const title = titleHTML.match(TITLE_REGEX)[1] as string

  const descriptionStartIndex = descriptionHeadingMatch.index + descriptionHeadingMatch[0].length
  const descriptionEndIndex = extraLinksHeadingMatch.index
  const descriptionHTML = bodyHTML
    .slice(descriptionStartIndex, descriptionEndIndex)
    .trim() as string

  const extraLinksStartIndex = extraLinksHeadingMatch.index + extraLinksHeadingMatch[0].length
  const extraLinksHTML = bodyHTML.slice(extraLinksStartIndex)
  const extraLinks = Array.from(extraLinksHTML.matchAll(EXTRA_LINK_REGEX)).map(
    match => match[1]
  ) as string[]

  return {
    title,
    descriptionHTML,
    extraLinks,
  }
}
