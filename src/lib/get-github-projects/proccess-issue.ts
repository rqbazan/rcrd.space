import { IssueFragment } from '@/codegen/types'

const ISSUE_BODY_REGEX = /<h\d[^>]*>[\w\s]+<\/h\d>/g
const EXTRA_LINK_REGEX = /href=\\?"([^"]*)"/g

export function processIssue(issue: IssueFragment) {
  const { bodyHTML } = issue

  const headingMatches = Array.from(bodyHTML.matchAll(ISSUE_BODY_REGEX)) as RegExpMatchArray[]

  const [descriptionHeadingMatch, extraLinksHeadingMatch] = headingMatches

  let descriptionHTML: string
  let extraLinks: string[]

  if (descriptionHeadingMatch) {
    const descriptionStartIndex = descriptionHeadingMatch[0].length
    const descriptionEndIndex = extraLinksHeadingMatch?.index
    descriptionHTML = bodyHTML.slice(descriptionStartIndex, descriptionEndIndex).trim()
  }

  if (extraLinksHeadingMatch) {
    const extraLinksStartIndex = extraLinksHeadingMatch.index + extraLinksHeadingMatch[0].length
    const extraLinksHTML = bodyHTML.slice(extraLinksStartIndex)
    extraLinks = Array.from(extraLinksHTML.matchAll(EXTRA_LINK_REGEX)).map(match => match[1])
  }

  return {
    descriptionHTML,
    extraLinks,
  }
}
