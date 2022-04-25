export type ProjectLinkType = 'github' | 'package' | 'homepage' | 'figma' | 'drawing'

export interface ProjectLink {
  type: ProjectLinkType
  url: string
}

export interface Project {
  id: string
  title: string
  descriptionHTML: string
  tags: string[]
  links: ProjectLink[]
}
