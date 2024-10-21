import { Avatar } from '@/components/avatar/Avatar.tsx'
import { Box } from '@/components/box/Box.tsx'
import { Button } from '@/components/button/Button.tsx'
import { DateTime } from '@/components/date-tiem/DateTime.tsx'
import { List } from '@/components/list/List.tsx'
import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Transaction } from '@/components/transaction/Transaction.tsx'
import { useTransactionsData } from '@/pages/transactions/useTransactionsData.ts'

export const TransactionsPage = () => {
  const { data, nextPage } = useTransactionsData()

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
      </List>
      <Button onClick={nextPage}>Load More</Button>
    </main>
  )
}
