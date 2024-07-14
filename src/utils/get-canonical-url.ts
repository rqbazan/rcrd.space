export const BASE_PROD_URL = "https://rcrd.space";

export function getCanonicalUrl(url: URL) {
  return `${BASE_PROD_URL}${url.pathname}`;
}
