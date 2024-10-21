import React from 'react'

import { Box } from '@/components/box/Box.tsx'

import './transaction.css'

import { Currency } from '@/components/currency/Currency.tsx'

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
  return <Currency className="transaction__amount">{children}</Currency>
}

Transaction.ListItem = function ListItem({ children }: TransactionProps) {
  return <Box className="transaction-list-item">{children}</Box>
}
