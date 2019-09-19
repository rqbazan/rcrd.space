import HighlightJson from 'components/highlight-json'
import MainLayout from 'layouts/main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as theme from 'src/theme'
import data from 'src/data.json'
import { CoverageImg, Main, Navigation } from './elements'

export default function HomeScreen() {
  return (
    <MainLayout
      style={{ minHeight: `calc(100vh - ${theme.sizes.headerHeight}px)` }}
    >
      <CoverageImg />
      <Main>
        <HighlightJson />
        <Navigation>
          {Object.keys(data.socialLinks).map(iconName => (
            <a
              key={data.socialLinks[iconName]}
              href={data.socialLinks[iconName]}
              target="__blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={theme.icons[iconName]}
                color={theme.colors.selection}
                size="2x"
              />
            </a>
          ))}
        </Navigation>
      </Main>
    </MainLayout>
  )
}
