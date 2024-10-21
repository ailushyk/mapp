import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/button/Button.tsx'
import { filtersSchema } from '@/components/filters/filters-schema.ts'

export type FiltersFormValues = z.infer<typeof filtersSchema>

interface FiltersProps {
  values?: FiltersFormValues
  isDisabled?: boolean
  onChange: (params: FiltersFormValues) => void
}

export function Filters({ values, isDisabled, onChange }: FiltersProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FiltersFormValues>({
    resolver: zodResolver(filtersSchema),
  })

  const onSubmit = (data: FiltersFormValues) => {
    onChange(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={isDisabled}>
        <div>
          <label htmlFor="q">Search</label>
          <input id="q" defaultValue={values?.q} {...register('q')} />
          {errors.q?.message && <p>{errors.q?.message}</p>}
        </div>
        <div>
          <label htmlFor="beneficiary">Beneficiary</label>
          <input
            id="beneficiary"
            defaultValue={values?.beneficiary}
            {...register('beneficiary')}
          />
          {errors.beneficiary?.message && <p>{errors.beneficiary?.message}</p>}
        </div>
        <Button type="submit" size="sm" variant="secondary">
          Search
        </Button>
      </fieldset>
    </form>
  )
}
