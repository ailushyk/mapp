import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/button/Button.tsx'
import { filtersSchema } from '@/components/filters/filters-schema.ts'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/Form.tsx'
import { Input } from '@/components/form/Input.tsx'

export type FiltersFormValues = z.infer<typeof filtersSchema>

interface FiltersProps {
  values?: FiltersFormValues
  isDisabled?: boolean
  onChange: (params: FiltersFormValues) => void
}

export function Filters({ values, isDisabled, onChange }: FiltersProps) {
  const form = useForm<FiltersFormValues>({
    resolver: zodResolver(filtersSchema),
    defaultValues: values,
  })

  const onSubmit = (data: FiltersFormValues) => {
    onChange(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Text Search</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Search by description, beneficiary, or address and another
                fields.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="beneficiary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beneficiary</FormLabel>
              <FormControl>
                <Input placeholder="John D." {...field} />
              </FormControl>
              <FormDescription>
                Search by description, beneficiary, or address and another
                fields.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm" variant="secondary">
          Search
        </Button>
      </form>
    </Form>
  )
}
