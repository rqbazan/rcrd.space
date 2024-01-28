import { useLocation } from "@remix-run/react";

export function useCanonicalUrl() {
  const location = useLocation();
  return `https://rcrd.space${location.pathname}`;
}
