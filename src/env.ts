const API_URL = import.meta.env.VITE_API_URL as string
const LIMIT = (import.meta.env.VITE_LIMIT as string) ?? '10'

export const env = {
  API_URL,
  LIMIT,
} as const
