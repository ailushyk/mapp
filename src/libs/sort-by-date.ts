export function sortByDate<T extends { date: string }>(data: T[]) {
  return [...data].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}
