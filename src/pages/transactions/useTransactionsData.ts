import { useCallback, useEffect, useReducer } from 'react'

import { ApiActions, apiReducer } from '@/libs/api/api-reducer.ts'
import { fetcher, LIMIT } from '@/libs/api/fetcher.ts'
import type { ApiRequestParams, TransactionValue } from '@/types.ts'

interface QueryParams extends ApiRequestParams {
  beneficiary?: string
}

const fetchTransactions = async (
  params: ApiRequestParams,
): Promise<TransactionValue[] | null> => {
  const _params = new URLSearchParams({
    ...(params.q && { q: params.q }),
    _page: params.page,
    _limit: params.limit,
    ...(params.sort && { _sort: params.sort }),
    ...(params.order && { _order: params.order }),
  })
  const url = `/transactions?${_params.toString()}`
  return await fetcher<TransactionValue[]>({ url })
}

const initialParams: QueryParams = {
  page: '1',
  limit: String(LIMIT),
  sort: 'date',
  order: 'desc',
}

export const useTransactionsData = (query?: QueryParams) => {
  const [state, dispatch] = useReducer(
    apiReducer<TransactionValue[], QueryParams>,
    {
      data: [],
      query: initialParams,
      isPending: false,
      endOfData: false,
      error: null,
    },
  )

  const onChangeQuery = useCallback(
    async () => {
      console.log('!!! SHOULD RUN ONCE !!!')
      dispatch({
        type: ApiActions.FetchStart,
        payload: { ...initialParams, ...query },
      })
      const data = await fetchTransactions(state.query)
      if (!data || data.length === 0) {
        dispatch({ type: ApiActions.EndOfData })
        return
      }
      dispatch({
        type: ApiActions.FetchSuccess,
        payload: data,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.query],
  )

  useEffect(() => {
    onChangeQuery().catch(console.error)
  }, [onChangeQuery])

  const nextPage = async () => {
    const nextPage = parseInt(state.query.page) + 1
    const newParams: QueryParams = {
      ...state.query,
      page: nextPage.toString(),
    }
    const newTransactions = await fetchTransactions(newParams)
    console.log('newTransactions', newTransactions)
    // if (!newTransactions || newTransactions.length === 0) {
    //   handleEndOfData()
    //   return
    // }
    // if (newTransactions) {
    //   currentQuery.current = newParams
    //   setTransactions([...transactions, ...newTransactions])
    // }
  }
  return {
    data: state.data,
    nextPage,
  }
}
