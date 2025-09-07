import clsx from 'clsx'
import Link from './Link'

const Header = () => {
  return (
    <header className={clsx('flex items-center justify-between py-5')}>
      <Link className={clsx('text-3xl font-semibold')} href='/'>
        AlexF0x
      </Link>
      <ul className={clsx('flex gap-5')}>
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
