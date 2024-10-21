import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

import { env } from '@/env.ts'
import { fetchWithParams } from '@/libs/api/fetch-with-params.ts'
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

  const nextPage = async () => {
    await setSize(size + 1)
  }

  return {
    data,
    isLoading,
    isLoadingMore,
    endOfData: data && data[data.length - 1]?.length === 0,
    nextPage,
    mutate,
  }
}
