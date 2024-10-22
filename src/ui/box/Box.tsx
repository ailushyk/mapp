import React from 'react'
import cn from 'clsx'

import './box.css'

export const Box = ({
  children,
  className,
  flex,
}: {
  children: React.ReactNode
  className?: string
  flex?: 'row' | 'column'
}) => {
  return (
    <div
      className={cn(
        'box',
        {
          'box--flex-row': flex === 'row',
          'box--flex-column': flex === 'column',
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
