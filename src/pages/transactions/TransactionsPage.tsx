import { useTransactionsData } from '@/pages/transactions/useTransactionsData.ts'
import { Balance } from '@/components/balance/Balance.tsx'
import { Filters } from '@/components/filters/Filters.tsx'
import { useFilters } from '@/components/filters/useFilters.ts'
import { InfiniteScrollAnchor } from '@/components/infinite-scroll/InfiniteScrollAnchor.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { TransactionForm } from '@/components/transaction/TransactionForm.tsx'
import { TransactionsTopPanel } from '@/components/transaction/TransactionsTopPanel.tsx'
import { Avatar } from '@/ui/avatar/Avatar.tsx'
import { Box } from '@/ui/box/Box.tsx'
import { Button } from '@/ui/button/Button.tsx'
import { DateTime } from '@/ui/date-tiem/DateTime.tsx'
import { Heading } from '@/ui/Heading.tsx'
import { InfoMessage } from '@/ui/info-message/InfoMessage.tsx'
import { List } from '@/ui/list/List.tsx'
import { Loading } from '@/ui/Loading.tsx'
import type { TransactionValue } from '@/types.ts'

export default function TransactionsPage() {
  const { filters, updateFilters } = useFilters()
  const {
    data,
    isLoadingMore,
    endOfData,
    nextPage,
    addTransaction,
    removeTransaction,
  } = useTransactionsData({
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
          <Filters values={filters} onChange={updateFilters} />
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
            <Box>
              <Transaction.Amount>{transaction.amount}</Transaction.Amount>
              <Transaction.Actions>
                <Button
                  variant="icon"
                  onClick={async () => {
                    await removeTransaction(transaction.id)
                  }}
                >
                  X
                </Button>
              </Transaction.Actions>
            </Box>
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
