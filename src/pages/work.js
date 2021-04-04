import * as api from '~/lib/api'
import { SEO } from '~/components/seo'
import { MainLayout } from '~/layouts/main'
import { TechProject } from '~/components/tech-project'

export default function WorkPage({ techProjects, techProfile }) {
  return (
    <>
      <SEO techProfile={techProfile} title="Thing I’ve worked" />
      <MainLayout>
        <div className="my-8 px-6 md:px-0 md:my-6 space-y-8">
          {techProjects.map(techProject => (
            <TechProject
              key={`tech-project-${techProject.id}`}
              {...techProject}
            />
          ))}
        </div>
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const [techProjects, techProfile] = await Promise.all([
    api.getTechProjects(),
    api.getTechProfile()
  ])

  return {
    props: {
      techProjects,
      techProfile
    },
    revalidate: 10
  }
}
