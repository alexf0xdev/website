import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'
import { IconType } from 'react-icons'
import Link from './Link'

interface IButton {
  size?: 'base'
  variant?: 'primary' | 'secondary' | 'secondaryLight'
  href?: string
  external?: boolean
  fullSize?: boolean
  className?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  icon?: IconType
  children: ReactNode
}

const sizes = {
  base: 'px-5 py-2',
}

const variants = {
  primary: 'bg-orange-600 hover:bg-orange-700',
  secondary: 'bg-neutral-800 hover:bg-zinc-700',
  secondaryLight: 'bg-zinc-700/50 hover:bg-zinc-700',
}

const Button: FC<IButton> = ({
  size = 'base',
  variant = 'primary',
  href,
  external,
  fullSize,
  className: otherClassName,
  type = 'button',
  onClick,
  icon: Icon,
  children,
}) => {
  const className = cn(
    'flex justify-center font-medium cursor-pointer rounded-md',
    fullSize && 'w-full',
    Icon && 'items-center gap-2',
    variants[variant],
    sizes[size],
    otherClassName,
  )

  const icon = Icon && <Icon className={cn('w-5 h-5')} />

  if (href) {
    return (
      <Link className={className} href={href} external={external}>
        {icon}
        {children}
      </Link>
    )
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {icon}
      {children}
    </button>
  )
}

export default Button
