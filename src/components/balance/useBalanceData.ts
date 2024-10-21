import { useMemo } from 'react'
import useSWR from 'swr'

import { fetcher } from '@/libs/api/fetcher.ts'
import { TransactionValue } from '@/types.ts'

export const useBalanceData = () => {
  const { data, isLoading } = useSWR(['/transactions'], ([url]) =>
    fetcher<TransactionValue[]>({ url }),
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
      return acc + Math.round(amount * 100)
    }, 0)
    return sum ? sum / 100 : 0
  }, [data])

  return {
    balance,
    isLoading,
  }
}
