import { formatDate } from '@/libs/date/format-date.ts'

interface DateTimeProps {
  children: string
  format?: 'short' | 'long' | 'date'
}

export const DateTime = ({ children, format }: DateTimeProps) => {
  return (
    <time dateTime={children}>{formatDate(children, { format: format })}</time>
  )
}
