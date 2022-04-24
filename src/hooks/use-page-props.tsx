import * as React from 'react'

export interface PagePropsProviderProps {
  pageProps: any
  children: React.ReactNode
}

const PagePropsContext = React.createContext(null)

export function usePageProps() {
  return React.useContext(PagePropsContext)
}

export function PagePropsProvider({ pageProps, children }: PagePropsProviderProps) {
  return <PagePropsContext.Provider value={pageProps}>{children}</PagePropsContext.Provider>
}
