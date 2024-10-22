import React from 'react'
import cn from 'clsx'

import './header.css'

export const Header = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <header className={cn('header', className)}>{children}</header>
}
