import * as React from 'react'

import { MainHeading } from '~/layouts'
import { Anchor, Typography } from '~/ui'
import { ExternalLinkSvg, FigmaSvg, GithubSvg, PackageSvg } from '~/ui/icons'

import { CalendarSvg, LatestProject, PdfSvg, ProjectPost, SwitchSvg } from './components'

export function ProjectsView() {
  return (
    <React.Fragment>
      <MainHeading
        title="Projects"
        content="Here&rsquo;s a list of open source projects writen mostly using JavaScript and TypeScript."
      />
      <Typography fontStyle="h3" className="mb-6">
        Latests
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <LatestProject
          href="https://github.com/rqbazan/ff#readme"
          className="from-green-200 to-green-400 bg-gradient-to-tr"
          projectName="FF Library"
          data-splitbee-event="View FF Library"
          logoIcon={<SwitchSvg />}
        />
        <LatestProject
          href="https://github.com/rqbazan/weeks#readme"
          className="from-red-200 to-red-400 bg-gradient-to-tr"
          projectName="Weeks Life"
          data-splitbee-event="View Weeks Life"
          logoIcon={<CalendarSvg />}
        />
        <LatestProject
          href="https://github.com/rqbazan/my-resume-with-react-pdf#readme"
          className="from-yellow-200 to-yellow-400 bg-gradient-to-tr"
          projectName="My React CV"
          data-splitbee-event="View My React CV"
          logoIcon={<PdfSvg />}
        />
      </div>
      <div className="flex flex-col gap-8">
        <ProjectPost
          projectName="Seach GraphQL Jobs"
          techs={['NextJS', 'TailwindCSS', 'Codegen', 'Storybook', 'Apollo', 'Typescript']}
          links={[
            { href: 'https://github.com/rqbazan/graphql-jobs#readme', icon: GithubSvg },
            {
              href: 'https://www.figma.com/file/vnoMxFemCYynPFt37BFPK0/GraphQL-jobs?node-id=0%3A1',
              icon: FigmaSvg,
            },
            {
              href: 'https://graphql-jobs.now.sh/',
              icon: ExternalLinkSvg,
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
            { href: 'https://github.com/rqbazan/prisma-anonymous-chat#readme', icon: GithubSvg },
            {
              href: 'https://prisma-anonymous-chat-staging.herokuapp.com/',
              icon: ExternalLinkSvg,
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
          techs={['Gastby', 'ThreeJS', 'ReactThreeFiber', 'Typescript', 'Firebase']}
          links={[
            { href: 'https://github.com/rqbazan/react-three-fiber-101#readme', icon: GithubSvg },
            {
              href: 'https://www.figma.com/file/7lGU5TbDcFUtiU5IatkNsI/react-three-fiber-101?node-id=11%3A14',
              icon: FigmaSvg,
            },
            {
              href: 'https://react-three-fiber-101.now.sh/',
              icon: ExternalLinkSvg,
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
          techs={['TailwindCSS', 'NextJS', 'Typescript', 'GithubAPI', 'Vercel']}
          links={[
            { href: 'https://github.com/rqbazan/aimo-challenge#readme', icon: GithubSvg },
            {
              href: 'https://aimo-challenge.rqbazan.now.sh/',
              icon: ExternalLinkSvg,
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
          techs={['Storybook', 'React', 'ReactSpring', 'Typescript']}
          links={[
            { href: 'https://github.com/rqbazan/zeit-toast-clone#readme', icon: GithubSvg },
            { href: 'https://www.npmjs.com/package/zeit-toast-clone', icon: PackageSvg },
            {
              href: 'https://zeit-toast-clone.rqbazan.now.sh/',
              icon: ExternalLinkSvg,
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
          techs={['NextJS', 'TailwindCSS', 'Stitches', 'Typescript']}
          links={[
            { href: 'https://github.com/rqbazan/rcrd.space#readme', icon: GithubSvg },
            {
              href: 'https://rcrd.space',
              icon: ExternalLinkSvg,
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
            { href: 'https://github.com/rqbazan/hashing-with-pbkdf2#readme', icon: GithubSvg },
            {
              href: 'https://hashing-with-pbkdf2.vercel.app',
              icon: ExternalLinkSvg,
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
              icon: GithubSvg,
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
    </React.Fragment>
  )
}
