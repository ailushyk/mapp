type DateFormat = 'short' | 'long' | 'date'

interface DateFormatOptions {
  format?: DateFormat
}
export const formatDate = (
  isoString: string,
  options?: DateFormatOptions,
): string => {
  const date = new Date(isoString)
  if (isNaN(date.getTime())) {
    return 'Invalid date'
  }

  let _options: Intl.DateTimeFormatOptions

  switch (options?.format) {
    case 'date':
      _options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }
      break
    case 'long':
      _options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
      break
    default:
      _options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
      break
  }
  return date.toLocaleString('pl-PL', _options)
}
