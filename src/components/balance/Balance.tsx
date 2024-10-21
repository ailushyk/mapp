import { useBalanceData } from '@/components/balance/useBalanceData.ts'
import { Currency } from '@/components/currency/Currency.tsx'
import { Loading } from '@/components/Loading.tsx'

export function Balance() {
  const { balance, isLoading } = useBalanceData()

  return (
    <div>
      Your balance is {isLoading ? <Loading /> : <Currency>{balance}</Currency>}
    </div>
  )
}
