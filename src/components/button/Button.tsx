import React, { forwardRef } from 'react'
import cn from 'clsx'

import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'destructive'
    | 'ghost'
    | 'outline'
    | 'icon'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, variant = 'primary', size = 'md', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('button', {
          'button--primary': variant === 'primary',
          'button--secondary': variant === 'secondary',
          'button--accent': variant === 'accent',
          'button--destructive': variant === 'destructive',
          'button--ghost': variant === 'ghost',
          'button--outline': variant === 'outline',
          'button--icon': variant === 'icon',
          'button--sm': size === 'sm',
          'button--md': size === 'md',
          'button--lg': size === 'lg',
        })}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
