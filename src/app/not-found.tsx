import Button from '@/components/Button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
}

const NotFound = () => {
  return (
    <div className={cn('flex items-center justify-between min-h-[calc(100vh-240px)]')}>
      <div>
        <h1 className={cn('text-5xl font-semibold')}>There&apos;s nothing here</h1>
        <p className={cn('mt-5')}>
          The page you were looking for appears to be in a different location or is unavailable.
        </p>
        <div className={cn('flex flex-col sm:flex-row mt-10')}>
          <Button href='/'>Back from vacation</Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
