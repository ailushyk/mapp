export const getInitials = (name: string) => {
  const initials = name.split(' ')
  initials.length = 2
  return initials.map((word) => word[0]).join('')
}
