import React from 'react'
import cn from 'clsx'

import './container.css'

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('container', className)}>{children}</div>
}
