import { useState } from 'react'

import { Avatar } from '@/components/avatar/Avatar.tsx'
import { Box } from '@/components/box/Box.tsx'
import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { InfiniteScrollAnchor } from '@/components/infinite-scroll/InfiniteScrollAnchor.tsx'
import { List } from '@/components/list/List.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { useTransactionsData } from '@/pages/transactions/useTransactionsData.ts'

export const TransactionsPage = () => {
  const [q, setQ] = useState<string | undefined>()
  const { data, isLoading, isLoadingMore, nextPage } = useTransactionsData({
    q,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!data.length) {
    return <div>No transactions found</div>
  }

  return (
    <main>
      <PageTitle>Transactions</PageTitle>

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

        <InfiniteScrollAnchor
          loadMore={async (inView) => {
            if (inView) await nextPage()
          }}
        >
          {isLoadingMore ? 'Loading...' : null}
        </InfiniteScrollAnchor>
      </List>
    </main>
  )
}
