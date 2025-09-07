import NextLink from 'next/link'

interface ILink {
  className?: string
  href: string
  children: React.ReactNode
}

const Link: React.FC<ILink> = ({ className, href, children }) => {
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
