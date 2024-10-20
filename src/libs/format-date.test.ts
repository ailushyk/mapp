import { formatDate } from './format-date'

describe('formatDate', () => {
  it('should format a valid ISO date string to short format by default', () => {
    const isoDate = '2021-12-15T01:05:42'
    const expectedOutput = '15.12.2021, 01:05'
    expect(formatDate(isoDate)).toBe(expectedOutput)
  })

  it('should format a valid ISO date string to long format', () => {
    const isoDate = '2021-12-15T01:05:42'
    const expectedOutput = '15 grudnia 2021 01:05'
    expect(formatDate(isoDate, 'long')).toBe(expectedOutput)
  })

  it('should format a valid ISO date string to date format', () => {
    const isoDate = '2021-12-15T01:05:42'
    const expectedOutput = '15.12.2021'
    expect(formatDate(isoDate, 'date')).toBe(expectedOutput)
  })

  it('should return "Invalid date" for an invalid ISO date string', () => {
    const invalidDate = 'invalid-date'
    expect(formatDate(invalidDate)).toBe('Invalid date')
  })

  it('should handle edge cases', () => {
    const edgeCaseDate = '2020-02-29T00:00:00'
    const expectedOutput = '29.02.2020, 00:00'
    expect(formatDate(edgeCaseDate)).toBe(expectedOutput)
  })

  it("should format the date correctly for New Year's Eve", () => {
    const newYearDate = '2021-12-31T23:59:59'
    const expectedOutput = '31 grudnia 2021 23:59'
    expect(formatDate(newYearDate, 'long')).toBe(expectedOutput)
  })

  it('should format the date correctly for a leap year date', () => {
    const leapYearDate = '2020-02-29T12:30:00'
    const expectedOutput = '29 lutego 2020 12:30'
    expect(formatDate(leapYearDate, 'long')).toBe(expectedOutput)
  })
})
