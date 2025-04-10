import { cn } from '@/lib/utils'
import { ILanguageColors, IProject } from '@/types/github'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { TbGitFork, TbLink, TbStar } from 'react-icons/tb'
import Button from './Button'

interface IProjectCard {
  project: IProject
  languageColors: ILanguageColors | undefined
}

const ProjectCard: FC<IProjectCard> = ({ project, languageColors }) => {
  return (
    <div className={cn('bg-zinc-800 p-5')}>
      <h3 className={cn('text-2xl font-semibold')}>{project.name}</h3>
      {project.description && <p>{project.description}</p>}
      <div className={cn('flex gap-4 mt-2')}>
        {project.language && (
          <div className={cn('flex items-center gap-2')}>
            <div
              className={cn('w-3 h-3 rounded-full')}
              style={{
                backgroundColor: languageColors
                  ? languageColors[project.language].color
                  : '#ffffff',
              }}
            />
            {project.language}
          </div>
        )}
        <div className={cn('flex items-center gap-2')}>
          <TbStar className={cn('w-5 h-5')} />
          {project.stargazers_count}
        </div>
        <div className={cn('flex items-center gap-2')}>
          <TbGitFork className={cn('w-5 h-5')} />
          {project.forks_count}
        </div>
      </div>
      <div className={cn('flex flex-col sm:flex-row gap-2 mt-3')}>
        <Button icon={FaGithub} href={project.html_url} external>
          View on GitHub
        </Button>
        {project.homepage && (
          <Button
            variant='secondaryLight'
            icon={TbLink}
            href={project.homepage}
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
