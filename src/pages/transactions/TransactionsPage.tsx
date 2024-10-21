import { useEffect, useState } from 'react'

import { Avatar } from '@/components/avatar/Avatar.tsx'
import { Box } from '@/components/box/Box.tsx'
import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { List } from '@/components/list/List.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { fetcher } from '@/libs/fetcher.ts'
import { sortByDate } from '@/libs/sort-by-date.ts'
import type { TransactionValue } from '@/types.ts'

const fetchTransactions = async (): Promise<TransactionValue[]> => {
  const data = await fetcher<TransactionValue[]>({
    url: '/transactions',
  })
  return sortByDate(data)
}

export const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<TransactionValue[]>([])

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

      <List>
        {transactions.map((transaction) => (
          <Transaction.ListItem key={transaction.id}>
            <Avatar alt={transaction.beneficiary} />
            <Box className="w-full">
              <Transaction.Beneficiary>
                {transaction.beneficiary}
              </Transaction.Beneficiary>
              <DateTime format="short">{transaction.date}</DateTime>
            </Box>
            <Transaction.Amount>{transaction.amount}</Transaction.Amount>
          </Transaction.ListItem>
        ))}
      </List>
    </main>
  )
}
