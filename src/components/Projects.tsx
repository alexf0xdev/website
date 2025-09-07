'use client'

import { getLanguageColors } from '@/lib/github'
import { IRepository } from '@/types/github'
import clsx from 'clsx'
import useSWR from 'swr'
import ProjectCard from './ProjectCard'

const Projects = ({ repositories }: { repositories: IRepository[] }) => {
  const { data: languageColors } = useSWR('language-colors', getLanguageColors)

  return (
    <div className={clsx('mt-32')}>
      <h2 className={clsx('text-3xl font-semibold')}>My projects</h2>
      {repositories.length ? (
        <div className={clsx('grid gap-5 mt-5')}>
          {repositories
            .filter((repository) => !repository.fork)
            .sort((a, b) => b.starsCount - a.starsCount)
            .map((repository, index) => (
              <ProjectCard key={index} repository={repository} languageColors={languageColors} />
            ))}
        </div>
      ) : (
        <p className={clsx('mt-5')}>I don&apos;t have any open projects at the moment.</p>
      )}
    </div>
  )
}

export default Projects
