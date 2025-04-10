'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const ScrollTop = () => {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

export default ScrollTop
