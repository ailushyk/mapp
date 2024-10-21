import { useBalanceData } from '@/components/balance/useBalanceData.ts'
import { Currency } from '@/components/currency/Currency.tsx'
import { FiltersFormValues } from '@/components/filters/Filters.tsx'
import { Loading } from '@/components/Loading.tsx'

interface BalanceProps {
  filters?: FiltersFormValues
}

export function Balance({ filters }: BalanceProps) {
  const { balance, isLoading } = useBalanceData({ filters })

  return (
    <div>
      Your balance is {isLoading ? <Loading /> : <Currency>{balance}</Currency>}
    </div>
  )
}
