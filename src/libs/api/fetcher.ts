import { env } from '@/env.ts'

export const LIMIT = 10

export const fetcher = async <T>({
  url,
}: {
  url: string
}): Promise<T | null> => {
  if (!env.API_URL) throw new Error('API_URL is not set')
  if (!url.startsWith('/')) throw new Error('URL should start with /')

  let response
  try {
    response = await fetch(`${env.API_URL}${url}`)
  } catch (error) {
    console.error(`Failed to fetch ${url}`)
    console.error(error)
    throw new Error('Something went wrong')
  }

  if (!response.ok) {
    console.error(`Failed to fetch ${url}`)
    console.error(`Response status: ${response.status}`)
    console.error(response.statusText)
    throw new Error('Failed to fetch transactions')
  }

  if (response.status === 204) return null

  return (await response.json()) as T
}
