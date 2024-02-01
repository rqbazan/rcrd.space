import { useLocation } from "@remix-run/react"

export const BASE_PROD_URL = "http://rcrd.space"

export function useCanonicalUrl() {
  const location = useLocation()
  return `${BASE_PROD_URL}${location.pathname}`
}
