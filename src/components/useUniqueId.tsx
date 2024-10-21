import { useRef } from 'react'

let idCounter = 0

export const useUniqueId = (prefix = 'id') => {
  const idRef = useRef<string>()

  if (idRef.current === undefined) {
    idRef.current = `${prefix}-${idCounter++}`
  }

  return idRef.current
}
