import NextLink from 'next/link'
import { FC, ReactNode } from 'react'

interface ILink {
  className?: string
  href: string
  external?: boolean
  children: ReactNode
}

const Link: FC<ILink> = ({ className, href, external, children }) => (
  <NextLink
    className={className}
    href={href}
    target={external ? '_blank' : '_self'}
    scroll={false}
  >
    {children}
  </NextLink>
)

export default Link
