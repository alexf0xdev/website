import { cn } from '@/lib/utils'
import Link from './Link'

const Contact = () => {
  return (
    <div className={cn('mt-32')}>
      <h2 className={cn('text-3xl font-semibold')}>Contact me</h2>
      <p className={cn('mt-5')}>
        To contact me you can use this email -{' '}
        <Link
          className={cn('text-orange-500 underline')}
          href='mailto:me@alexf0x.dev'
          external
        >
          me@alexf0x.dev
        </Link>
      </p>
    </div>
  )
}

export default Contact
