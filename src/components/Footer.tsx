import { cn } from '@/lib/utils'
import { FaGithub, FaTelegram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import Link from './Link'

const Footer = () => {
  return (
    <footer className={cn('flex flex-col items-center text-center mt-10 mb-5')}>
      <ul className={cn('flex gap-2')}>
        <li>
          <Link
            className={cn('flex bg-zinc-800 p-2 hover:bg-zinc-700')}
            href='https://github.com/alexf0xdev'
            external
          >
            <FaGithub className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn('flex bg-zinc-800 p-2 hover:bg-zinc-700')}
            href='https://t.me/alexf0xdev'
            external
          >
            <FaTelegram className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn('flex bg-zinc-800 p-2 hover:bg-zinc-700')}
            href='https://x.com/alexf0xdev'
            external
          >
            <FaXTwitter className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn('flex bg-zinc-800 p-2 hover:bg-zinc-700')}
            href='https://youtube.com/@alexf0xdev'
            external
          >
            <FaYoutube className={cn('w-6 h-6')} />
          </Link>
        </li>
      </ul>
      <p className={cn('text-base mt-2')}>
        Source code of this website{' '}
        <Link
          className={cn('text-orange-500 underline')}
          href='https://github.com/alexf0xdev/website'
          external
        >
          here
        </Link>
      </p>
      <p className={cn('text-base')}>
        &copy; AlexF0x, {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
