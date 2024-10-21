import cn from 'clsx'

import { currency } from '@/libs/currency.ts'

import './currency.css'

export const Currency = ({
  children,
  className,
}: {
  children: number
  className?: string
}) => (
  <span
    className={cn(
      'currency',
      {
        'currency--positive': children > 0,
        'currency--negative': children < 0,
      },
      className,
    )}
  >
    {currency(children)}
  </span>
)
