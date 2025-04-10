'use client'

import { getLanguageColors } from '@/lib/github'
import { cn } from '@/lib/utils'
import { IProject } from '@/types/github'
import useSWR from 'swr'
import ProjectCard from './ProjectCard'

const Projects = ({ projects }: { projects: IProject[] }) => {
  const { data: languageColors } = useSWR('languageColors', getLanguageColors)

  return (
    <div className={cn('mt-32')}>
      <h2 className={cn('text-3xl font-semibold')}>My projects</h2>
      {projects.length ? (
        <div className={cn('grid gap-5 mt-5')}>
          {projects
            .filter((project) => !project.fork)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                languageColors={languageColors}
              />
            ))}
        </div>
      ) : (
        <p className={cn('mt-5')}>
          I don&apos;t have any open projects at the moment.
        </p>
      )}
    </div>
  )
}

export default Projects
