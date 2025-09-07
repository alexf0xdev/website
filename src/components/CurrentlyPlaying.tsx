'use client'

import { fetcher } from '@/lib/utils'
import { ICurrentlyPlaying } from '@/types/spotify'
import clsx from 'clsx'
import Image from 'next/image'
import useSWR from 'swr'

const ListeningNow = ({
  currentlyPlaying: _currentlyPlaying,
}: {
  currentlyPlaying: ICurrentlyPlaying | null
}) => {
  const { data: currentlyPlaying } = useSWR<ICurrentlyPlaying>('/api/currently-playing', fetcher, {
    refreshInterval: 1000,
    fallbackData: _currentlyPlaying!,
  })

  if (!currentlyPlaying) return null

  return (
    <div className={clsx('relative bg-neutral-800 p-5 mt-10 rounded-md')}>
      <h2 className={clsx('text-2xl font-semibold')}>Currently playing</h2>
      <div className={clsx('flex items-center gap-5 mt-2')}>
        <div className='relative h-12 sm:h-15 w-12 sm:w-15'>
          <Image
            className={clsx('bg-neutral-700/50 rounded-sm object-cover')}
            src={currentlyPlaying.imageUrl}
            alt='Track image'
            fill
          />
        </div>
        <div>
          <h3
            className={clsx(
              'text-base sm:text-lg font-semibold max-w-30 sm:max-w-92 whitespace-nowrap overflow-hidden text-ellipsis',
            )}
          >
            {currentlyPlaying.name}
          </h3>
          <p
            className={clsx(
              'text-sm sm:text-base max-w-30 sm:max-w-92 whitespace-nowrap overflow-hidden text-ellipsis',
            )}
          >
            {currentlyPlaying.artists}
          </p>
        </div>
      </div>
      <Image
        className={clsx('absolute bottom-5 right-5')}
        src='/spotify.svg'
        width={30}
        height={30}
        alt='Spotify'
      />
    </div>
  )
}

export default ListeningNow
