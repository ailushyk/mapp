import { currency } from './currency'

describe('formatCurrency', () => {
  it('should format the amount in PLN correctly', () => {
    const result = currency(1234567.89)
    expect(result).toBe('1\u00a0234\u00a0567,89\xa0zł')
  })

  it('should format the amount in USD for en-US locale', () => {
    const result = currency(9876543.21, 'USD', 'en-US')
    expect(result).toBe('$9,876,543.21')
  })

  it('should format the amount in EUR correctly for pl-PL locale', () => {
    const result = currency(1234567.89, 'EUR', 'pl-PL')
    expect(result).toBe('1\u00a0234\u00a0567,89\xa0€')
  })

  it('should handle small amounts correctly', () => {
    const result = currency(0.99)
    expect(result).toBe('0,99\xa0zł')
  })

  it('should handle negative amounts correctly', () => {
    const result = currency(-1234.56)
    expect(result).toBe('-1234,56\xa0zł')
  })

  it('should format the amount with two decimal places by default', () => {
    const result = currency(1000)
    expect(result).toBe('1000,00\xa0zł')
  })

  it('should return a properly formatted amount even for large numbers', () => {
    const result = currency(1234567890.99)
    expect(result).toBe('1\u00a0234\u00a0567\u00a0890,99\xa0zł')
  })
})
