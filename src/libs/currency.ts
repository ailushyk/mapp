export const currency = (
  amount: number,
  currency: string = 'PLN',
  locale: string = 'pl-PL',
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
