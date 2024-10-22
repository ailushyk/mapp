import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { filtersSchema } from '@/components/filters/filters-schema.ts'
import { Button } from '@/ui/button/Button.tsx'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/form/Form.tsx'
import { Input } from '@/ui/form/Input.tsx'

export type FiltersFormValues = z.infer<typeof filtersSchema>

interface FiltersProps {
  values?: FiltersFormValues
  onChange: (params: FiltersFormValues) => void
}

export function Filters({ values, onChange }: FiltersProps) {
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

        <Button type="submit" size="sm">
          Search
        </Button>
      </form>
    </Form>
  )
}
