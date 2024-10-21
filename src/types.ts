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
  q?: string // full-text search
  page?: string
  limit?: string
  sort?: string
  order?: string
}
