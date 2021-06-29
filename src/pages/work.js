import * as api from '~/lib/api'
import { SEO } from '~/components/seo'
import { MainLayout } from '~/layouts/main'
import { TechProject } from '~/components/tech-project'

export default function WorkPage({ techProjects, techProfile }) {
  return (
    <>
      <SEO techProfile={techProfile} title="Things I’ve worked" />
      <MainLayout techProfile={techProfile}>
        <MainLayout.Content className="space-y-8">
          {techProjects.map(techProject => (
            <TechProject
              key={`tech-project-${techProject.id}`}
              {...techProject}
            />
          ))}
        </MainLayout.Content>
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const [techProjects, techProfile] = await Promise.all([
    api.getTechProjects(),
    api.getTechProfile(),
  ])

  return {
    props: {
      techProjects,
      techProfile,
    },
    revalidate: 10,
  }
}
