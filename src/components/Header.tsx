import { NAV_LINKS } from '@/lib/constants'
import clsx from 'clsx'
import Link from './Link'

const Header = () => {
  return (
    <header className={clsx('flex items-center justify-between py-5')}>
      <Link className={clsx('text-3xl font-semibold')} href='/'>
        AlexF0x
      </Link>
      <ul className={clsx('flex gap-5')}>
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
