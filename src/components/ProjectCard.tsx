import { cn } from '@/lib/utils'
import { ILanguageColor, IRepository } from '@/types/github'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { TbGitFork, TbLink, TbStar } from 'react-icons/tb'
import Button from './Button'

interface IProjectCard {
  repository: IRepository
  languageColors: Record<string, ILanguageColor> | undefined
}

const ProjectCard: FC<IProjectCard> = ({ repository, languageColors }) => {
  return (
    <div className={cn('bg-zinc-800 p-5')}>
      <h3 className={cn('text-2xl font-semibold')}>{repository.name}</h3>
      {repository.description && <p>{repository.description}</p>}
      <div className={cn('flex gap-4 mt-2')}>
        {repository.language && (
          <div className={cn('flex items-center gap-2')}>
            <div
              className={cn('w-3 h-3 rounded-full')}
              style={{
                backgroundColor: languageColors
                  ? languageColors[repository.language].color
                  : '#ffffff',
              }}
            />
            {repository.language}
          </div>
        )}
        <div className={cn('flex items-center gap-2')}>
          <TbStar className={cn('w-5 h-5')} />
          {repository.starsCount}
        </div>
        <div className={cn('flex items-center gap-2')}>
          <TbGitFork className={cn('w-5 h-5')} />
          {repository.forksCount}
        </div>
      </div>
      <div className={cn('flex flex-col sm:flex-row gap-2 mt-3')}>
        <Button icon={FaGithub} href={repository.url} external>
          View on GitHub
        </Button>
        {repository.homepage && (
          <Button
            variant='secondaryLight'
            icon={TbLink}
            href={repository.homepage}
            external
          >
            Direct link
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
