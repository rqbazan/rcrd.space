import { BASE_URL } from "./seo-config";

export function getCanonicalUrl(url: URL) {
  return `${BASE_URL}${url.pathname}`;
}
