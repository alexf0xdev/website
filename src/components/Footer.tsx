import { cn } from '@/lib/utils'
import { FaGithub, FaTelegram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import Link from './Link'

const Footer = () => {
  return (
    <footer
      className={cn(
        'bg-zinc-800/50 flex flex-col-reverse sm:flex-row sm:items-center justify-between p-5 mt-10 w-full rounded-t-md',
      )}
    >
      <div className={cn('mt-2 sm:mt-0')}>
        <p className={cn('text-base')}>
          Source code of this website{' '}
          <Link
            className={cn('text-orange-500 underline')}
            href='https://github.com/alexf0xdev/website'
            external
          >
            here
          </Link>
        </p>
        <p className={cn('text-zinc-400 text-base')}>
          &copy; AlexF0x, {new Date().getFullYear()}
        </p>
      </div>
      <ul className={cn('flex gap-2')}>
        <li>
          <Link
            className={cn(
              'flex bg-zinc-700/50 p-2 rounded-sm hover:bg-zinc-700',
            )}
            href='https://github.com/alexf0xdev'
            external
          >
            <FaGithub className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'flex bg-zinc-700/50 p-2 rounded-sm hover:bg-zinc-700',
            )}
            href='https://t.me/alexf0xdev'
            external
          >
            <FaTelegram className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'flex bg-zinc-700/50 p-2 rounded-sm hover:bg-zinc-700',
            )}
            href='https://x.com/alexf0xdev'
            external
          >
            <FaXTwitter className={cn('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'flex bg-zinc-700/50 p-2 rounded-sm hover:bg-zinc-700',
            )}
            href='https://youtube.com/@alexf0xdev'
            external
          >
            <FaYoutube className={cn('w-6 h-6')} />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
