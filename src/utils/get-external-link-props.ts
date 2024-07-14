export function getExternalLinkProps(href: string) {
  const isInternal = href?.startsWith("/");

  if (isInternal) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
