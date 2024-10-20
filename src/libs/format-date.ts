type DateFormat = 'short' | 'long' | 'date'

export const formatDate = (
  isoString: string,
  format: DateFormat = 'short',
): string => {
  const date = new Date(isoString)
  if (isNaN(date.getTime())) {
    return 'Invalid date'
  }

  let options: Intl.DateTimeFormatOptions

  switch (format) {
    case 'date':
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }
      break
    case 'long':
      options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
      break
    default:
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
      break
  }
  return date.toLocaleString('pl-PL', options)
}
