'use client'

import Button from '@/components/Button'
import clsx from 'clsx'

interface IError {
  error: Error
  reset: () => void
}

const Error = ({ reset }: IError) => {
  return (
    <div className={clsx('flex items-center justify-between min-h-[calc(100vh-240px)]')}>
      <div>
        <h1 className={clsx('text-5xl font-semibold')}>Something went wrong</h1>
        <p className={clsx('mt-5')}>There was some kind of error, it happens.</p>
        <div className={clsx('flex flex-col sm:flex-row mt-10')}>
          <Button onClick={() => reset()}>Retry</Button>
        </div>
      </div>
    </div>
  )
}

export default Error
