export function getExternalLinkProps(href: string) {
  const isInternal = href?.startsWith('/')

  if (isInternal) {
    return null
  }

  return {
    target: '_blank',
    rel: 'noreferrer',
  }
}
