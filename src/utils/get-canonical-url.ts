import { BASE_URL } from "./seo-config.ts";

export function getCanonicalUrl(url: URL) {
  return `${BASE_URL}${url.pathname}`;
}
