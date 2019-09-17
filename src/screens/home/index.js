import HighlightJson from 'components/highlight-json'
import MainLayout from 'layouts/main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import * as theme from 'src/theme'
import data from 'src/data.json'
import { CoverageImg, Main, Navigation } from './elements'

export default function HomeScreen() {
  return (
    <MainLayout>
      <CoverageImg />
      <Main>
        <HighlightJson />
        <Navigation>
          <a href={data.socialLinks.github} target="__blank">
            <FontAwesomeIcon
              icon={faGithub}
              color={theme.colors.selection}
              size="2x"
            />
          </a>
          <a href={data.socialLinks.twitter} target="__blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color={theme.colors.selection}
              size="2x"
            />
          </a>
          <a href={data.socialLinks.linkedin} target="__blank">
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
