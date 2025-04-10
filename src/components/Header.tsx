import { cn } from '@/lib/utils'
import Link from './Link'

const Header = () => {
  return (
    <header className={cn('flex items-center justify-between py-5')}>
      <Link className={cn('text-3xl font-semibold')} href='/'>
        AlexF0x
      </Link>
      <div className={cn('flex gap-5')}>
        <Link href='/'>Home</Link>
        <Link href='https://github.com/alexf0xdev' external>
          GitHub
        </Link>
      </div>
    </header>
  )
}

export default Header
