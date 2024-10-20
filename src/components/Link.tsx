import React from 'react'

import './link.css'

export const Link = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  )
}
