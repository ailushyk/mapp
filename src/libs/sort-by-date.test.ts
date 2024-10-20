import { sortByDate } from './sort-by-date'

describe('sortByDate', () => {
  it('should sort data in descending order by date', () => {
    const data = [
      { id: 1, date: '2021-12-15T01:05:42' },
      { id: 2, date: '2023-06-01T12:45:00' },
      { id: 3, date: '2022-03-25T08:30:15' },
      { id: 4, date: '2020-10-10T14:00:00' },
    ]

    const sorted = sortByDate(data)

    expect(sorted).toEqual([
      { id: 2, date: '2023-06-01T12:45:00' },
      { id: 3, date: '2022-03-25T08:30:15' },
      { id: 1, date: '2021-12-15T01:05:42' },
      { id: 4, date: '2020-10-10T14:00:00' },
    ])
  })

  it('should handle an empty array', () => {
    const data: { date: string }[] = []
    const sorted = sortByDate(data)
    expect(sorted).toEqual([])
  })

  it('should handle data with the same dates correctly', () => {
    const data = [
      { id: 1, date: '2021-12-15T01:05:42' },
      { id: 2, date: '2021-12-15T01:05:42' },
      { id: 3, date: '2021-12-15T01:05:42' },
    ]

    const sorted = sortByDate(data)

    expect(sorted).toEqual([
      { id: 1, date: '2021-12-15T01:05:42' },
      { id: 2, date: '2021-12-15T01:05:42' },
      { id: 3, date: '2021-12-15T01:05:42' },
    ])
  })

  it('should not mutate the original array', () => {
    const data = [
      { id: 1, date: '2021-12-15T01:05:42' },
      { id: 2, date: '2023-06-01T12:45:00' },
    ]

    const original = [...data]
    sortByDate(data)

    expect(data).toEqual(original)
  })
})
