import clsx from 'clsx'
import { FaGithub, FaTelegram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import Link from './Link'

const Footer = () => {
  return (
    <footer
      className={clsx(
        'flex flex-col-reverse sm:flex-row sm:items-center justify-between mt-10 mb-5 w-full',
      )}
    >
      <div className={clsx('mt-2 sm:mt-0')}>
        <p className={clsx('text-base')}>
          Source code of this website{' '}
          <Link
            className={clsx('text-orange-500 underline')}
            href='https://github.com/alexf0xdev/website'
          >
            here
          </Link>
          .
        </p>
        <p className={clsx('text-neutral-400 text-base')}>
          &copy; AlexF0x, {new Date().getFullYear()}.
        </p>
      </div>
      <ul className={clsx('flex gap-2')}>
        <li>
          <Link
            className={clsx('flex bg-neutral-700/50 p-2 rounded-sm hover:bg-neutral-700')}
            href='https://github.com/alexf0xdev'
          >
            <FaGithub className={clsx('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={clsx('flex bg-neutral-700/50 p-2 rounded-sm hover:bg-neutral-700')}
            href='https://t.me/alexf0xdev'
          >
            <FaTelegram className={clsx('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={clsx('flex bg-neutral-700/50 p-2 rounded-sm hover:bg-neutral-700')}
            href='https://x.com/alexf0xdev'
          >
            <FaXTwitter className={clsx('w-6 h-6')} />
          </Link>
        </li>
        <li>
          <Link
            className={clsx('flex bg-neutral-700/50 p-2 rounded-sm hover:bg-neutral-700')}
            href='https://youtube.com/@alexf0xdev'
          >
            <FaYoutube className={clsx('w-6 h-6')} />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
