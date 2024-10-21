import { useMemo } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

import { env } from '@/env.ts'
import { fetchWithParams } from '@/libs/api/fetch-with-params.ts'
import type { ApiRequestParams, TransactionValue } from '@/types.ts'

interface QueryParams extends ApiRequestParams {
  beneficiary?: string
}

const initialParams: QueryParams = {
  page: '1',
  limit: String(env.LIMIT),
  sort: 'date',
  order: 'desc',
}

const transactionsApiKey =
  (_query: QueryParams): SWRInfiniteKeyLoader<TransactionValue[]> =>
  (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null
    return ['/transactions', { ..._query, page: String(pageIndex + 1) }]
  }

export const useTransactionsData = (query?: QueryParams) => {
  const _query = useMemo(
    () => {
      console.log('!!! query', query)
      return { ...initialParams, ...query }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const { data, size, setSize } = useSWRInfinite(
    transactionsApiKey(_query),
    ([url, query]: [string, QueryParams]) => {
      return fetchWithParams<TransactionValue[]>(url, query)
    },
    {
      revalidateFirstPage: false,
    },
  )

  const nextPage = async () => {
    await setSize(size + 1)
  }

  return {
    data: data ? (data.flat() as TransactionValue[]) : [],
    isLoading: !data,
    nextPage,
  }
}
