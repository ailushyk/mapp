import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { transactionSchema } from '@/components/transaction/transaction-schema.ts'
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

export type TransactionFormValues = z.infer<typeof transactionSchema>

interface TransactionFormProps {
  onSubmit: (data: TransactionFormValues) => void
}

export function TransactionForm({ onSubmit }: TransactionFormProps) {
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: '',
      account: '',
      beneficiary: '',
      address: '',
      description: '',
      // amount: 19.99,
      // account: '10103486643679406000000000',
      // beneficiary: 'John D.',
      // address: 'Lorem',
      // description: 'Ipsum',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          onSubmit(values)
          form.reset()
        })}
      >
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
                This is the person who will receive the money.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="19.99" />
              </FormControl>
              <FormDescription>
                This is the amount of money that will be transferred.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={0}
                  placeholder="10103486643679406000000000"
                />
              </FormControl>
              <FormDescription>
                This is the amount of money that will be transferred. Prefix
                will be added automatically.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="730 Division Place, Tyro, North Carolina, 6679"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the address of the beneficiary.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Lorem ipsum" {...field} />
              </FormControl>
              <FormDescription>
                This is the description of the transaction.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm">
          Submit
        </Button>
      </form>
    </Form>
  )
}
