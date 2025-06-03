import { cn } from '@/lib/utils'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={cn('mt-32')}>
      <h2 className={cn('text-3xl font-semibold')}>Contact me</h2>
      <div className={cn('bg-neutral-800 p-5 rounded-md mt-5')}>
        <Link
          className={cn('text-orange-500 underline')}
          href='mailto:alexf0x@alexf0x.dev'
        >
          contact@alexf0x.dev
        </Link>
      </div>
    </div>
  )
}

export default Contact
