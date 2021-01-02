import React from 'react'
import * as api from '~/lib/api'
import SEO from '~/components/seo'
import MainLayout from '~/layouts/main'
import TechProject from '~/components/tech-project'
import UPButton from '~/components/up-button'

export default function WorkPage({ techProjects }) {
  return (
    <>
      <SEO title="Thing I’ve worked" />
      <MainLayout>
        <div className="my-8 px-6 md:px-0 md:my-6 space-y-8">
          {techProjects.map(techProject => (
            <TechProject
              key={`tech-project-${techProject.id}`}
              {...techProject}
            />
          ))}
        </div>
        <div className="fixed bottom-0 right-0 mr-4 mb-4 lg:mr-8 lg:mb-8">
          <UPButton />
        </div>
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const techProjects = await api.getTechProjects()

  return {
    props: {
      techProjects
    },
    revalidate: 10
  }
}
