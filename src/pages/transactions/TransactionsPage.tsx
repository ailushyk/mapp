import { useState } from 'react'

import { Avatar } from '@/components/avatar/Avatar.tsx'
import { Balance } from '@/components/balance/Balance.tsx'
import { Box } from '@/components/box/Box.tsx'
import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { Filters, FiltersFormValues } from '@/components/filters/Filters.tsx'
import { InfiniteScrollAnchor } from '@/components/infinite-scroll/InfiniteScrollAnchor.tsx'
import { InfoMessage } from '@/components/info-message/InfoMessage.tsx'
import { List } from '@/components/list/List.tsx'
import { Loading } from '@/components/Loading.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { useTransactionsData } from '@/pages/transactions/useTransactionsData.ts'

export const TransactionsPage = () => {
  const [filters, setFilters] = useState<FiltersFormValues>()
  const { data, isLoadingMore, endOfData, nextPage } = useTransactionsData({
    ...filters,
  })

  return (
    <main>
      <PageTitle>Transactions</PageTitle>

      {/* Add transaction */}
      {/* Balance */}
      <Balance filters={filters} />
      {/* Filters */}
      <Filters values={filters} onChange={setFilters} />

      <List>
        {data.map((transaction) => (
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
