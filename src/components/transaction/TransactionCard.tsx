import React from 'react'

import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { Header } from '@/components/header/Header.tsx'
import { Heading } from '@/components/Heading.tsx'

import './transaction-card.css'

export interface TransactionCardProps {
  children?: React.ReactNode
}

/**
 * TODO: Work in progress
 */
export const TransactionCard = ({ children }: TransactionCardProps) => {
  return <article className="transaction-card">{children}</article>
}

TransactionCard.Header = function TCHeader({
  children,
  date,
}: {
  children: React.ReactNode
  date: string // TODO
}) {
  return (
    <Header className="transaction-header">
      <Heading level={2}>{children}</Heading>
      <p>
        <DateTime format="long">{date}</DateTime>
      </p>
    </Header>
  )
}

// TODO: Work in progress
// amount
// beneficiary
// account
// address
TransactionCard.Details = function TCDetails({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="transaction-details">{children}</section>
}

TransactionCard.Description = function TCDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="transaction-description">{children}</section>
}
