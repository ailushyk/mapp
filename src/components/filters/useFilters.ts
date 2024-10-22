import { useState } from 'react'

import { FiltersFormValues } from '@/components/filters/Filters.tsx'

export const useFilters = () => {
  const [filters, setFilters] = useState<FiltersFormValues>({
    q: '',
    beneficiary: '',
  })

  const updateFilters = (newFilters: FiltersFormValues) => {
    setFilters(newFilters)
  }

  return { filters, updateFilters }
}
