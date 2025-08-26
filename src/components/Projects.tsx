'use client'

import { getLanguageColors } from '@/lib/github'
import { cn } from '@/lib/utils'
import { IRepository } from '@/types/github'
import useSWR from 'swr'
import ProjectCard from './ProjectCard'

const Projects = ({ repositories }: { repositories: IRepository[] }) => {
  const { data: languageColors } = useSWR('language-colors', getLanguageColors)

  return (
    <div className={cn('mt-32')}>
      <h2 className={cn('text-3xl font-semibold')}>My projects</h2>
      {repositories.length ? (
        <div className={cn('grid gap-5 mt-5')}>
          {repositories
            .filter((repository) => !repository.fork)
            .sort((a, b) => b.starsCount - a.starsCount)
            .map((repository, index) => (
              <ProjectCard key={index} repository={repository} languageColors={languageColors} />
            ))}
        </div>
      ) : (
        <p className={cn('mt-5')}>I don&apos;t have any open projects at the moment.</p>
      )}
    </div>
  )
}

export default Projects
