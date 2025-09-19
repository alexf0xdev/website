import { ILanguageColor, IRepository } from '@/types/github'
import clsx from 'clsx'
import { TbBrandGithub, TbGitFork, TbLink, TbStar } from 'react-icons/tb'
import Button from './Button'

interface IProjectCard {
  repository: IRepository
  languageColor: ILanguageColor | undefined
}

const RepositoryCard: React.FC<IProjectCard> = ({ repository, languageColor }) => {
  return (
    <div className={clsx('bg-neutral-800 p-5 rounded-md')}>
      <h3 className={clsx('text-2xl font-semibold')}>{repository.name}</h3>
      {repository.description && <p>{repository.description}</p>}
      <div className={clsx('flex gap-4 mt-2')}>
        {repository.language && (
          <div className={clsx('flex items-center gap-2')}>
            <div
              className={clsx('w-3 h-3 rounded-full')}
              style={{
                backgroundColor: languageColor ? languageColor.color : '#ffffff',
              }}
            />
            {repository.language}
          </div>
        )}
        <div className={clsx('flex items-center gap-2')}>
          <TbStar className={clsx('w-5 h-5')} />
          {repository.starsCount}
        </div>
        <div className={clsx('flex items-center gap-2')}>
          <TbGitFork className={clsx('w-5 h-5')} />
          {repository.forksCount}
        </div>
      </div>
      <div className={clsx('flex flex-col sm:flex-row gap-2 mt-3')}>
        <Button
          icon={<TbBrandGithub className={clsx('w-5 h-5')} />}
          className='rounded-sm'
          href={repository.url}
        >
          View on GitHub
        </Button>
        {repository.homepage && (
          <Button
            variant='secondaryLight'
            className='rounded-sm'
            icon={<TbLink className={clsx('w-5 h-5')} />}
            href={repository.homepage}
          >
            Direct link
          </Button>
        )}
      </div>
    </div>
  )
}

export default RepositoryCard
