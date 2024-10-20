import { env } from '../env.ts'

export const fetcher = async <T>({ url }: { url: string }): Promise<T> => {
  if (!env.API_URL) {
    throw new Error('API_URL is not set')
  }
  if (!url.startsWith('/')) {
    throw new Error('URL should start with /')
  }
  const response = await fetch(`${env.API_URL}${url}`)
  if (!response.ok) {
    throw new Error('Failed to fetch transactions')
  }
  return (await response.json()) as T
}
