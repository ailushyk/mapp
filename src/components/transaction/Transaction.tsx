import React from 'react'

import { Heading } from '@/components/Heading.tsx'
import { Transaction } from '@/types.ts'

import './transaction-card.css'

import { currency } from '@/libs/currency.ts'
import { formatDate } from '@/libs/format-date.ts'

interface TransactionCardProps {
  transaction: Transaction
  children?: React.ReactNode
}

export const TransactionListItem = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className="transaction-list-item">{children}</div>
}

export const TransactionBeneficiary = ({ children }: { children: string }) => {
  return <div>{children}</div>
}

export const TransactionAmount = ({ children }: { children: number }) => {
  return <div>{currency(children)}</div>
}

export const TransactionCard = ({
  children,
  transaction: { id, account, address, amount, beneficiary, description, date },
}: TransactionCardProps) => {
  return (
    <article className="transaction-card">
      <header className="transaction-header">
        <Heading level={2}>Transaction #{id}</Heading>
        <p>
          <time dateTime={date}>{formatDate(date, 'long')}</time>
        </p>
      </header>

      <section className="transaction-details">
        <p>
          <strong>Amount:</strong> {amount} PLN
        </p>
        <p>
          <strong>Beneficiary:</strong> {beneficiary}
        </p>
        <p>
          <strong>Account:</strong> {account}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </section>

      <section className="transaction-description">
        <p>
          <strong>Description:</strong> {description}
        </p>
      </section>

      <div>{children}</div>
    </article>
  )
}
