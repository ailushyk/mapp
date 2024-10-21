import React from 'react'

import './button.css'

import cn from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void | Promise<void>
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'destructive'
    | 'ghost'
    | 'outline'
    | 'icon'
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn('button', {
        'button--primary': variant === 'primary',
        'button--secondary': variant === 'secondary',
        'button--accent': variant === 'accent',
        'button--destructive': variant === 'destructive',
        'button--ghost': variant === 'ghost',
        'button--outline': variant === 'outline',
        'button--icon': variant === 'icon',
      })}
    >
      {children}
    </button>
  )
}
