import HighlightJson from 'components/highlight-json'
import MainLayout from 'layouts/main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import * as theme from 'src/theme'
import { CoverageImg, Main, Navigation } from './elements'

export default function HomeScreen() {
  return (
    <MainLayout>
      <CoverageImg />
      <Main>
        <HighlightJson />
        <Navigation>
          <a href="https://github.com/rqbazan" target="__blank">
            <FontAwesomeIcon
              icon={faGithub}
              color={theme.colors.selection}
              size="2x"
            />
          </a>
          <a href="https://twitter.com/rqbazan" target="__blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color={theme.colors.selection}
              size="2x"
            />
          </a>
          <a href="http://www.linkedin.com/in/rqbazan" target="__blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              color={theme.colors.selection}
              size="2x"
            />
          </a>
        </Navigation>
      </Main>
    </MainLayout>
  )
}
