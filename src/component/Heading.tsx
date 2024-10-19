import React from 'react'
import cn from 'clsx'

export const Heading = ({
  children,
  level,
  className,
}: {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}) => {
  const Component = `h${level}` as const

  return <Component className={cn('heading', className)}>{children}</Component>
}
