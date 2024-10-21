import { fetcher } from '@/libs/api/fetcher.ts'
import { ApiRequestParams } from '@/types.ts'

export const fetchWithParams = async <T>(
  url: string,
  params: ApiRequestParams,
) => {
  const _params = new URLSearchParams({
    ...(params.q && { q: params.q }),
    ...(params.page && { _page: params.page }),
    ...(params.limit && { _limit: params.limit }),
    ...(params.sort && { _sort: params.sort }),
    ...(params.order && { _order: params.order }),
  })
  const _url = `${url}?${_params.toString()}`
  return await fetcher<T>({ url: _url })
}
