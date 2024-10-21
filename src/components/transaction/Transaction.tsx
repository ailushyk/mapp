import React from 'react'
import cn from 'clsx'

import { Box } from '@/components/box/Box.tsx'
import { currency } from '@/libs/currency.ts'

import './transaction.css'

type TransactionProps = {
  children: React.ReactNode
}

// TODO: Implement the Transaction component. Refactor TransactionCard to use the new Transaction component.
export const Transaction = ({ children }: TransactionProps) => {
  return <div className="transaction">{children}</div>
}

Transaction.Beneficiary = function Beneficiary({ children }: TransactionProps) {
  return <div className="transaction__beneficiary">{children}</div>
}

Transaction.Amount = function Amount({ children }: { children: number }) {
  return (
    <div
      className={cn('transaction__amount', {
        'transaction__amount--positive': children > 0,
        'transaction__amount--negative': children < 0,
      })}
    >
      {currency(children)}
    </div>
  )
}

Transaction.ListItem = function ListItem({ children }: TransactionProps) {
  return <Box className="transaction-list-item">{children}</Box>
}
