import { z } from 'zod'

export const transactionSchema = z.object({
  beneficiary: z.string().min(1),
  amount: z
    .string()
    .transform((value) => (value === '' ? '' : Number(value)))
    .refine(
      (value) => {
        return !isNaN(Number(value)) && Number(value) > 0
      },
      {
        message: 'Expected positive number, received string!',
      },
    ),

  account: z.string().min(1),
  address: z.string().min(1),
  description: z.string().min(1),
})
