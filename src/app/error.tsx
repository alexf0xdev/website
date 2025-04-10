'use client'

import Button from '@/components/Button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const Error = () => {
  const router = useRouter()

  return (
    <div
      className={cn(
        'flex items-center justify-between min-h-[calc(100vh-240px)]',
      )}
    >
      <div>
        <h1 className={cn('text-5xl font-semibold')}>Something went wrong</h1>
        <p className={cn('mt-5')}>There was some kind of error, it happens.</p>
        <div className={cn('flex flex-col sm:flex-row mt-10')}>
          <Button onClick={() => router.refresh()}>Reload page</Button>
        </div>
      </div>
    </div>
  )
}

export default Error
