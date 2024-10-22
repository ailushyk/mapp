import { useBalanceData } from '@/components/balance/useBalanceData.ts'
import { FiltersFormValues } from '@/components/filters/Filters.tsx'
import { Currency } from '@/ui/currency/Currency.tsx'
import { Loading } from '@/ui/Loading.tsx'

import './balance.css'

import { Box } from '@/ui/box/Box.tsx'

interface BalanceProps {
  filters?: FiltersFormValues
}

export function Balance({ filters }: BalanceProps) {
  const { balance, isLoading } = useBalanceData({ filters })

  return (
    <Box className="balance">
      Your balance is {isLoading ? <Loading /> : <Currency>{balance}</Currency>}
    </Box>
  )
}
