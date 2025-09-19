'use client'

import { DISABLE_SWR_REVALIDATE } from '@/lib/constants'
import { getLanguageColors } from '@/lib/github'
import { IRepository } from '@/types/github'
import clsx from 'clsx'
import useSWR from 'swr'
import ProjectCard from './RepositoryCard'

const Repositories = ({ repositories }: { repositories: IRepository[] }) => {
  const { data: languageColors } = useSWR(
    'language-colors',
    getLanguageColors,
    DISABLE_SWR_REVALIDATE,
  )

  return (
    <div className={clsx('mt-32')}>
      <h2 className={clsx('text-3xl font-semibold')}>My repositories</h2>
      {repositories.length ? (
        <div className={clsx('grid gap-5 mt-5')}>
          {repositories
            .filter((repository) => !repository.fork)
            .sort((a, b) => b.starsCount - a.starsCount)
            .map((repository, index) => (
              <ProjectCard
                key={index}
                repository={repository}
                languageColor={languageColors?.[repository.language]}
              />
            ))}
        </div>
      ) : (
        <p className={clsx('mt-5')}>I don&apos;t have any open repositories at the moment.</p>
      )}
    </div>
  )
}

export default Repositories
