import React, { Suspense, useEffect, useState } from 'react'
import history from 'history/browser'

import { InfoMessage } from '@/ui/info-message/InfoMessage.tsx'
import { Loading } from '@/ui/Loading.tsx'

const HomePage = React.lazy(() => import('@/pages/home/HomePage.tsx'))
const AboutPage = React.lazy(() => import('@/pages/about/AboutPage.tsx'))
const TransactionsPage = React.lazy(
  () => import('@/pages/transactions/TransactionsPage'),
)

export const Router = () => {
  const [pathname, setPathname] = useState('/')

  useEffect(() => {
    history.listen(({ location }) => {
      setPathname(location.pathname)
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`,
      )
    })
  }, [])

  return (
    <Suspense
      fallback={
        <InfoMessage>
          <Loading />
        </InfoMessage>
      }
    >
      {pathname === '/' && <HomePage />}
      {pathname === '/about' && <AboutPage />}
      {pathname === '/transactions' && <TransactionsPage />}
    </Suspense>
  )
}
