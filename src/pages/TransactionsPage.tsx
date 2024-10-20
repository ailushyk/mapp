import { useEffect, useState } from 'react'

import { Avatar } from '@/components/avatar/Avatar.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import {
  TransactionAmount,
  TransactionBeneficiary,
  TransactionCard,
  TransactionListItem,
} from '@/components/transaction/Transaction.tsx'
import { fetcher } from '@/libs/fetcher.ts'
import { sortByDate } from '@/libs/sort-by-date.ts'
import { Transaction } from '@/types.ts'

const fetchTransactions = async (): Promise<Transaction[]> => {
  const data = await fetcher<Transaction[]>({
    url: '/transactions',
  })
  return sortByDate(data)
}

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch(console.error)
    return () => {
      setTransactions([])
    }
  }, [])

  return (
    <main>
      <PageTitle>Transactions</PageTitle>

      <div>
        {transactions.map((transaction) => (
          <TransactionListItem key={transaction.id}>
            <Avatar alt={transaction.beneficiary} />
            <TransactionBeneficiary>
              {transaction.beneficiary}
            </TransactionBeneficiary>
            <TransactionAmount>{transaction.amount}</TransactionAmount>
            <TransactionCard transaction={transaction} />
          </TransactionListItem>
        ))}
      </div>
    </main>
  )
}
