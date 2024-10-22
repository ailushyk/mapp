import React from 'react'
import history from 'history/browser'

import { Link, LinkProps } from '@/ui/link/Link.tsx'

export const NavLink = ({ href, children, ...rest }: LinkProps) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    history.push(`${href}`)
  }

  return (
    <Link href={href} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}
