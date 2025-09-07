import clsx from 'clsx'
import Link from './Link'

interface IButton {
  size?: 'base'
  variant?: 'primary' | 'secondary' | 'secondaryLight'
  href?: string
  fullSize?: boolean
  className?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  icon?: React.ReactElement
  children: React.ReactNode
}

const sizes = {
  base: 'px-5 py-2',
}

const variants = {
  primary: 'bg-orange-600 hover:bg-orange-700',
  secondary: 'bg-neutral-800 hover:bg-neutral-700',
  secondaryLight: 'bg-neutral-700/50 hover:bg-neutral-700',
}

const Button: React.FC<IButton> = ({
  size = 'base',
  variant = 'primary',
  href,
  fullSize,
  className: _className,
  type = 'button',
  onClick,
  icon,
  children,
}) => {
  const className = clsx(
    'flex justify-center font-medium cursor-pointer rounded-md',
    fullSize && 'w-full',
    icon && 'items-center gap-2',
    variants[variant],
    sizes[size],
    _className,
  )

  if (href) {
    return (
      <Link className={className} href={href}>
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
