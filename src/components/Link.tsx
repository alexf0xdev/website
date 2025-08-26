import NextLink from 'next/link'
import { FC, ReactNode } from 'react'

interface ILink {
  className?: string
  href: string
  children: ReactNode
}

const Link: FC<ILink> = ({ className, href, children }) => {
  const isExternal = href.startsWith('https://')

  return (
    <NextLink
      className={className}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'nofollow' : undefined}
      scroll={false}
    >
      {children}
    </NextLink>
  )
}

export default Link
