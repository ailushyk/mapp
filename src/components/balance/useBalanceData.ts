import { useMemo } from 'react'
import useSWR from 'swr'

import { FiltersFormValues } from '@/components/filters/Filters.tsx'
import { fetchWithParams } from '@/libs/api/fetch-with-params.ts'
import { TransactionsQueryParams } from '@/pages/transactions/useTransactionsData.ts'
import { TransactionValue } from '@/types.ts'

export const useBalanceData = ({
  filters,
}: {
  filters?: FiltersFormValues
}) => {
  const { data, isLoading } = useSWR(
    ['/transactions', { ...filters }],
    ([url, filters]) => {
      return fetchWithParams<TransactionValue[], TransactionsQueryParams>(
        url,
        filters,
      )
    },
  )

  /**
   * WARNING: This is a simplified calculation for demo purposes.
   *
   * It's best to avoid performing calculations on the client side,
   * as this can lead to security issues,
   * accuracy problems, and performance concerns.
   * Instead, it's recommended to move calculations to the server.
   */
  const balance = useMemo(() => {
    const sum = data?.reduce((acc, { amount }) => {
      const val = Number(amount)
      return acc + Math.round((isNaN(val) ? 0 : val) * 100)
    }, 0)
    return sum ? sum / 100 : 0
  }, [data])

  return {
    balance,
    isLoading,
  }
}
