import * as z from 'zod'

export const filtersSchema = z.object({
  q: z.string().optional(),
  beneficiary: z.string().optional(),
})
