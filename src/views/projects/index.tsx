import * as React from 'react'
import {
  Edit2 as PencilSvgIcon,
  ExternalLink as ExternalLinkIconSvg,
  Figma as FigmaIconSvg,
  GitHub as GitHubSvgIcon,
  Package as PackageSvgIcon,
} from 'react-feather'
import { usePageProps } from '~/hooks'
import { Anchor, CoverImage, Typography } from '~/ui'
import { MainHeading, MainTransition } from '~/ui/layouts'
import { ProjectPost } from './components'

export function ProjectsView() {
  const { coverImageProps } = usePageProps()

  return (
    <MainTransition>
      <MainHeading
        title="Projects"
        content="Here&rsquo;s a list of my open source projects writen mostly using JavaScript and TypeScript."
      />
      <CoverImage
        {...coverImageProps}
        priority
        className="mb-9"
        description={
          <Typography fontStyle="small" muted>
            Photo by{' '}
            <Anchor fontStyle="inherit" href="https://unsplash.com/@fakurian">
              Milad Fakurian
            </Anchor>{' '}
            on{' '}
            <Anchor fontStyle="inherit" href="https://unsplash.com/s/photos/abstract">
              Unsplash
            </Anchor>
          </Typography>
        }
      />
      <div className="flex flex-col space-y-8">
        <ProjectPost
          projectName="PeYa Cover OG"
          postedAt="2022-12-30"
          techs={['Next.js', 'Edge Runtime', 'TaildwindCSS', 'TypeScript']}
          links={[
            {
              href: 'https://github.com/rqbazan/peya-cover-og#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://peya-cover-og.vercel.app/api?title=React%20OCTA&subtitle=Q-Commerce%20Tribe',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View PeYa Cover OG',
            },
          ]}
          content={
            <React.Fragment>
              A simple API to generate a cover image for the{' '}
              <Anchor href="https://apps.apple.com/pe/app/pedidosya-delivery-app/id490099807">
                PedidosYa
              </Anchor>{' '}
              repositories. Powered by the awesome{' '}
              <Anchor href="https://vercel.com/templates/next.js/og-image-generation">
                Open Graph Image Generator template.
              </Anchor>
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Ultra Fresh Sorting"
          postedAt="2022-12-30"
          techs={['Next.js', 'TaildwindCSS', 'DnD', 'Algorithms', 'JavaScript']}
          links={[
            {
              href: 'https://github.com/rqbazan/ultra-fresh-sorting#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://ultra-fresh-sorting.vercel.app',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Ultra Fresh Sorting',
            },
          ]}
          content={
            <React.Fragment>
              Takes a list of strings and sorts them by alphabetical order, but it uses a priority
              algorithm to sort the items that are more important to the user. The name was inspired
              by the project in{' '}
              <Anchor href="https://apps.apple.com/pe/app/pedidosya-delivery-app/id490099807">
                PedidosYa.
              </Anchor>
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Cometa Challenge"
          postedAt="2022-04-03"
          techs={['Next.js', 'TypeScript', 'Storybook', 'MaterialUI']}
          links={[
            {
              href: 'https://github.com/rqbazan/cometa-challenge#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://cometa.rcrd.space',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Cometa Challenge',
            },
          ]}
          content={
            <React.Fragment>
              The solution for{' '}
              <Anchor href="https://cometa.notion.site/48h-React-Frontend-Challenge-faaa3f5ff28a408799f374b6279793d8">
                the Cometa challenge
              </Anchor>
              , in order to get the Frontend Engineer position of the company.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Ravn Challenge"
          postedAt="2022-04-03"
          techs={[
            'Next.js',
            'TypeScript',
            'Cypress',
            'Storybook',
            'TailwindCSS',
            'GraphQL',
            'SemanticRelease',
          ]}
          links={[
            {
              href: 'https://github.com/rqbazan/ravn-challenge-v2-ricardo-q-bazan#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
              icon: PencilSvgIcon,
            },
            {
              href: 'https://sw.rcrd.space',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View RAVN Challenge',
            },
          ]}
          content={
            <React.Fragment>
              The solution for{' '}
              <Anchor href="https://docs.google.com/document/d/1hPVfun_1mxDokJ-qrFqIaUT5EfrYCL5X0pLGioEcDXk">
                the RAVN challenge
              </Anchor>
              , in order to get the Software Engineer position of the company.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Set Initial Color Mode"
          postedAt="2022-04-01"
          techs={['Rollup', 'React', 'SSR', 'TypeScript']}
          links={[
            {
              href: 'https://github.com/rqbazan/set-initial-color-mode#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
              icon: PackageSvgIcon,
            },
          ]}
          content={
            <React.Fragment>
              After reading{' '}
              <Anchor href="https://www.joshwcomeau.com/react/dark-mode/">
                The Quest for the Perfect Dark Mode
              </Anchor>{' '}
              by <Anchor href="https://twitter.com/JoshWComeau">Josh Comeau</Anchor>, I&rsquo;ve
              created a reusable solution for the dark-mode-flick-problem. My own website use this
              solution.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Toggled Library"
          techs={['React.js', 'TypeScript', 'ReactTestingLibrary', 'SemanticRelease']}
          links={[
            { href: 'https://github.com/rqbazan/toggled#readme', icon: GitHubSvgIcon },
            {
              href: 'https://www.npmjs.com/package/toggled',
              icon: PackageSvgIcon,
            },
          ]}
          content={
            <React.Fragment>
              Tiny library to use{' '}
              <Anchor href="https://martinfowler.com/articles/feature-toggles.html">
                feature flags
              </Anchor>{' '}
              in React. Get features by its slug identifier or get a binary output using flag
              queries.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Weeks of my Life"
          techs={['Next.js', 'TailwindCSS', 'SyncScroll', 'Math', 'JavaScript']}
          links={[
            { href: 'https://github.com/rqbazan/weeks#readme', icon: GitHubSvgIcon },
            {
              href: 'https://weeks.rcrd.space/pe/1996-05-17',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Weeks Life',
            },
          ]}
          content={
            <React.Fragment>
              Based on the poster of{' '}
              <Anchor href="https://www.weeksofmylife.com">www.weeksofmylife.com</Anchor>.
              It&rsquo;s a calculator to see how many weeks of life you just consumed. Based on the
              average life expectancy for some country: USA, Italy and Peru.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="My React CV"
          techs={['Vite.js', 'ReactPDF', 'Airtable', 'LambdaFunction', 'TypeScript']}
          links={[
            { href: 'https://github.com/rqbazan/resume#readme', icon: GitHubSvgIcon },
            {
              href: 'https://resume.rcrd.space',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View My React CV',
            },
          ]}
          content={
            <React.Fragment>
              I created my CV using <Anchor href="https://react-pdf.org/">ReactPDF</Anchor>, which
              is another renderer instead of ReactDOM. The information is saved in my personal
              Airtable and consumed in real-time using a Vercel Lambda Function.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Seach GraphQL Jobs"
          techs={['Next.js', 'TailwindCSS', 'Codegen', 'Storybook', 'Apollo', 'TypeScript']}
          links={[
            { href: 'https://github.com/rqbazan/graphql-jobs#readme', icon: GitHubSvgIcon },
            {
              href: 'https://www.figma.com/file/vnoMxFemCYynPFt37BFPK0/GraphQL-jobs?node-id=0%3A1',
              icon: FigmaIconSvg,
            },
            {
              href: 'https://graphql-jobs.now.sh/',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Seach GraphQL Jobs',
            },
          ]}
          content={
            <React.Fragment>
              Application made fully with TypeScript, using Storybook for component-driven
              development. Taking advance of client side Apollo resolvers. Powered by{' '}
              <Anchor href="https://api.graphql.jobs/">the free GraphQL Jobs API.</Anchor>
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Prisma Anonymous Chat"
          techs={['xstyled', 'Prisma', 'YogaGraphQL', 'Express', 'GraphQL Subscriptions']}
          links={[
            {
              href: 'https://github.com/rqbazan/prisma-anonymous-chat#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://prisma-anonymous-chat-staging.herokuapp.com/',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Prisma Anonymous Chat',
            },
          ]}
          content={
            <React.Fragment>
              My first try with GraphQL subscriptions, not production ready. Powered by Prisma v1.34
              (v2 has no support for subscriptions). Go to the app root (/) and get a new chat
              access.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Mr. Rubik"
          techs={['Gastby', 'ThreeJS', 'ReactThreeFiber', 'TypeScript', 'Firebase']}
          links={[
            {
              href: 'https://github.com/rqbazan/react-three-fiber-101#readme',
              icon: GitHubSvgIcon,
            },
            {
              href: 'https://www.figma.com/file/7lGU5TbDcFUtiU5IatkNsI/react-three-fiber-101?node-id=11%3A14',
              icon: FigmaIconSvg,
            },
            {
              href: 'https://react-three-fiber-101.now.sh/',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Mr. Rubik',
            },
          ]}
          content={
            <React.Fragment>
              After watch{' '}
              <Anchor href="https://www.youtube.com/watch?v=1rP3nNY2hTo">
                Animation and 3D in react-three-fiber (with Paul Henschel) — Learn With Jason
              </Anchor>
              , I decided to try to create this project just for fun, using The Rubik&rsquo;s cube
              Doodle for inspiration.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="AIMO Challenge"
          techs={['TailwindCSS', 'Next.js', 'TypeScript', 'GithubAPI', 'Vercel']}
          links={[
            { href: 'https://github.com/rqbazan/aimo-challenge#readme', icon: GitHubSvgIcon },
            {
              href: 'https://aimo-challenge.rqbazan.now.sh/',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View AIMO Challenge',
            },
          ]}
          content={
            <React.Fragment>
              The solution for{' '}
              <Anchor href="https://github.com/aimo/prueba-frontend">the AIMO challenge</Anchor>, in
              order to get the Software Engineer Frontend position of the company.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Vercel Toast Clone"
          techs={['Storybook', 'React', 'ReactSpring', 'TypeScript']}
          links={[
            { href: 'https://github.com/rqbazan/zeit-toast-clone#readme', icon: GitHubSvgIcon },
            { href: 'https://www.npmjs.com/package/zeit-toast-clone', icon: PackageSvgIcon },
            {
              href: 'https://zeit-toast-clone.vercel.app',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Vercel Toast Clone',
            },
          ]}
          content={
            <React.Fragment>
              A front-end challenge required by myself, I worked with animation effects powered by
              the awesome spring library.{' '}
              <Anchor href="https://vercel.com/design/toast">Here the original.</Anchor>
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="My Personal Site"
          techs={['Next.js', 'TailwindCSS', 'Stitches', 'TypeScript']}
          links={[
            { href: 'https://github.com/rqbazan/rcrd.space#readme', icon: GitHubSvgIcon },
            {
              href: 'https://rcrd.space',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View My Personal Site',
            },
          ]}
          content={
            <React.Fragment>
              Useful to create my personal brand as software developer, with this project I really
              want to share my knowledge about programming.
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Hashing With Pbkdf2"
          techs={['Svelte', 'CrytoHashing', 'TailwindCSS', 'Vite.js']}
          links={[
            { href: 'https://github.com/rqbazan/hashing-with-pbkdf2#readme', icon: GitHubSvgIcon },
            {
              href: 'https://hashing-with-pbkdf2.vercel.app',
              icon: ExternalLinkIconSvg,
              ['data-splitbee-event']: 'View Hashing With Pbkdf2',
            },
          ]}
          content={
            <React.Fragment>
              Serverless application to use the pbkdf2 algorithm and a sort of playground to hash
              any text like account safe passwords.{' '}
              <Anchor href="https://github.com/rqbazan/hashing-with-pbkdf2/blob/main/api/index.js">
                My λ function is right here.
              </Anchor>
            </React.Fragment>
          }
        />
        <ProjectPost
          projectName="Programming Challenges"
          techs={['C++', 'DataStructure', 'Algorithm', 'ACM-ICPC', 'OnlineJudges']}
          links={[
            {
              href: 'https://github.com/rqbazan/programming-challenges#readme',
              icon: GitHubSvgIcon,
              ['data-splitbee-event']: 'View Programming Challenges',
            },
          ]}
          content={
            <React.Fragment>
              Compilation of solutions for different programming challenges from ad-hoc problems to
              graph theory.
            </React.Fragment>
          }
        />
      </div>
    </MainTransition>
  )
}
