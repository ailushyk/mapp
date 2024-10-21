export interface TransactionValue {
  id: number
  amount: number
  beneficiary: string
  account: string
  address: string
  date: string
  description: string
}

export type ApiRequestParams = {
  page: string
  limit: string
  q?: string // full-text search
  sort?: string
  order?: string
}

export type ApiState<T, Q extends ApiRequestParams> = {
  data: T
  query: Q
  isPending: boolean
  endOfData: boolean
  error: { message: string } | null
}
