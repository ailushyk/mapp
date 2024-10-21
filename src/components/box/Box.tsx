import React from 'react'
import cn from 'clsx'

export const Box = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('box', className)}>{children}</div>
}
