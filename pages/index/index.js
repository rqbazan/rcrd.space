import HighlightJson from 'components/highlight-json'
import MainLayout from 'layouts/main'
import { CoverageImg, Main } from './elements'

export default function IndexPage() {
  return (
    <MainLayout>
      <CoverageImg />
      <Main>
        <HighlightJson />
      </Main>
    </MainLayout>
  )
}
