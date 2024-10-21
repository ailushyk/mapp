import { useState } from 'react'

import { Avatar } from '@/components/avatar/Avatar.tsx'
import { Balance } from '@/components/balance/Balance.tsx'
import { Box } from '@/components/box/Box.tsx'
import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { Filters, FiltersFormValues } from '@/components/filters/Filters.tsx'
import { Heading } from '@/components/Heading.tsx'
import { InfiniteScrollAnchor } from '@/components/infinite-scroll/InfiniteScrollAnchor.tsx'
import { InfoMessage } from '@/components/info-message/InfoMessage.tsx'
import { List } from '@/components/list/List.tsx'
import { Loading } from '@/components/Loading.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { TransactionForm } from '@/components/transaction/TransactionForm.tsx'
import { TransactionsTopPanel } from '@/components/transaction/TransactionsTopPanel.tsx'
import { useTransactionsData } from '@/pages/transactions/useTransactionsData.ts'
import { TransactionValue } from '@/types.ts'

export const TransactionsPage = () => {
  const [filters, setFilters] = useState<FiltersFormValues>({
    q: '',
    beneficiary: '',
  })
  const { data, isLoadingMore, endOfData, nextPage, addTransaction } =
    useTransactionsData({
      ...filters,
    })

  const transactions = data ? (data.flat() as TransactionValue[]) : []

  return (
    <main>
      <PageTitle>Transactions Page</PageTitle>

      <TransactionsTopPanel>
        <Box className="ttp-form">
          <Heading level={2}>Add Transaction</Heading>
          <TransactionForm onSubmit={addTransaction} />
        </Box>

        <Box className="ttp-balance">
          <Heading level={2}>Balance</Heading>
          <Balance filters={filters} />
        </Box>

        <Box className="ttp-filter">
          <Heading level={2}>Filters</Heading>
          <Filters values={filters} onChange={setFilters} />
        </Box>
      </TransactionsTopPanel>

      <List>
        <Heading level={2}>Transactions</Heading>
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

        {endOfData ? (
          <InfoMessage>No more transactions</InfoMessage>
        ) : (
          <InfiniteScrollAnchor
            loadMore={async (inView) => {
              if (inView) await nextPage()
            }}
          >
            {isLoadingMore ? (
              <InfoMessage>
                <Loading />
              </InfoMessage>
            ) : null}
          </InfiniteScrollAnchor>
        )}
      </List>
    </main>
  )
}
