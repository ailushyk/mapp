import { env } from '@/env.ts'
import { fetcher } from '@/libs/api/fetcher.ts'
import { sleep } from '@/libs/sleep.ts'
import { ApiRequestParams } from '@/types.ts'

export const fetchWithParams = async <T, P extends ApiRequestParams>(
  url: string,
  { page, limit, sort, order, ...params }: P,
) => {
  await sleep(300) // TODO: delay for demo purposes

  const queryParams = {
    ...((page || page === '1') && { _page: page }),
    ...((limit || limit === String(env.LIMIT)) && { _limit: limit }),
    ...(sort && { _sort: sort }),
    ...(order && { _order: order }),
    ...Object.fromEntries(
      Object.entries(params).filter(([, value]) => !!value),
    ),
  }

  const _params = new URLSearchParams(queryParams)
  const _url = `${url}?${_params.toString()}`
  return await fetcher<T>({ url: _url })
}
