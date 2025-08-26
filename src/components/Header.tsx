import { cn } from '@/lib/utils'
import Link from './Link'

const Header = () => {
  return (
    <header className={cn('flex items-center justify-between py-5')}>
      <Link className={cn('text-3xl font-semibold')} href='/'>
        AlexF0x
      </Link>
      <ul className={cn('flex gap-5')}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='https://github.com/alexf0xdev'>GitHub</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
