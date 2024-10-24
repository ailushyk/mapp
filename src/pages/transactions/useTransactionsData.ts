import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

import { TransactionFormValues } from '@/components/transaction/TransactionForm.tsx'
import { fetchWithParams } from '@/libs/api/fetch-with-params.ts'
import { fetcher } from '@/libs/api/fetcher.ts'
import { env } from '@/env.ts'
import type { ApiRequestParams, TransactionValue } from '@/types.ts'

export interface TransactionsQueryParams extends ApiRequestParams {
  beneficiary?: string
}

const initialParams: TransactionsQueryParams = {
  page: '1',
  limit: String(env.LIMIT),
  sort: 'date',
  order: 'desc',
}

const transactionsApiKey =
  (_query: TransactionsQueryParams): SWRInfiniteKeyLoader<TransactionValue[]> =>
  (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null
    return ['/transactions', { ..._query, page: String(pageIndex + 1) }]
  }

export const useTransactionsData = (query?: TransactionsQueryParams) => {
  const key = transactionsApiKey({ ...initialParams, ...query })
  const { data, size, setSize, isLoading, mutate } = useSWRInfinite(
    key,
    ([url, query]: [string, TransactionsQueryParams]) => {
      return fetchWithParams<TransactionValue[], TransactionsQueryParams>(
        url,
        query,
      )
    },
    {
      // revalidateFirstPage: true,
    },
  )

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')

  const endOfData = data && data[data.length - 1]?.length === 0

  const nextPage = async () => {
    await setSize(size + 1)
  }

  const addTransaction = async (values: TransactionFormValues) => {
    try {
      const body = JSON.stringify({
        ...values,
        date: new Date().toISOString(),
      })
      const result: Awaited<TransactionValue | null> = await fetcher({
        url: '/transactions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
      if (result && data) {
        await mutate([[result], ...data])
        alert('Transaction added')
      }
    } catch (e) {
      alert('Error adding transaction')
      console.error(e)
    }
  }

  const removeTransaction = async (id: number): Promise<void> => {
    try {
      const result = await fetcher({
        url: `/transactions/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (result && data) {
        await mutate(
          data.map((page) => {
            return page!.filter((t) => t.id !== id)
          }),
        )
        alert('Transaction removed')
      }
    } catch (e) {
      alert('Error removing transaction')
      console.error(e)
    }
  }

  return {
    data,
    isLoading,
    isLoadingMore,
    endOfData,
    nextPage,
    addTransaction,
    removeTransaction,
  }
}
