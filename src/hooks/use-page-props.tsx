import * as React from 'react'

export interface PagePropsProviderProps {
  pageProps: any
  children: React.ReactNode
}

export type PageType<TProps> = React.ComponentType<TProps> & {
  getLayout?: (element: React.ReactNode) => React.ReactNode
}

const PagePropsContext = React.createContext(null)

export function usePageProps() {
  return React.useContext(PagePropsContext)
}

export function withPageProps<TProps>(Component: React.ComponentType<TProps>) {
  const ComponentWithPageProps: PageType<TProps> = (props: TProps) => {
    return (
      <PagePropsContext.Provider value={props}>
        <Component {...props} />
      </PagePropsContext.Provider>
    )
  }

  return ComponentWithPageProps
}
