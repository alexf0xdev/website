'use client'

import { cn, fetcher } from '@/lib/utils'
import { ICurrentlyPlaying } from '@/types/spotify'
import Image from 'next/image'
import useSWR from 'swr'

const ListeningNow = () => {
  const { data: currentlyPlaying, isLoading } = useSWR<ICurrentlyPlaying>(
    '/api/spotify',
    fetcher,
    { refreshInterval: 1000 },
  )

  if (isLoading || !currentlyPlaying) {
    return null
  }

  return (
    <div className={cn('relative bg-zinc-800 p-5 mt-10')}>
      <h2 className={cn('text-2xl font-semibold')}>I&apos;m listening now:</h2>
      <div className={cn('flex items-center gap-5 mt-2')}>
        <div className='relative h-12 sm:h-15 w-12 sm:w-15'>
          <Image
            layout='fill'
            objectFit='cover'
            src={currentlyPlaying.imageUrl}
            alt='Track image'
          />
        </div>
        <div>
          <h3
            className={cn(
              'text-base sm:text-lg font-semibold max-w-30 sm:max-w-92 whitespace-nowrap overflow-hidden text-ellipsis',
            )}
          >
            {currentlyPlaying.name}
          </h3>
          <p
            className={cn(
              'text-sm sm:text-base max-w-30 sm:max-w-92 whitespace-nowrap overflow-hidden text-ellipsis',
            )}
          >
            {currentlyPlaying.artists}
          </p>
        </div>
      </div>
      <Image
        className={cn('absolute bottom-5 right-5')}
        src='/spotify.svg'
        width={30}
        height={30}
        alt='Spotify'
      />
    </div>
  )
}

export default ListeningNow
