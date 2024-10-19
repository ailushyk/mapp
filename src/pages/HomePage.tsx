import { Button } from '../component/button/Button.tsx'
import { Heading } from '../component/Heading.tsx'
import { PageHeader } from '../component/page-header/PageHeader.tsx'
import { PageTitle } from '../component/page-header/PageTitle.tsx'

import './HomePage.css'

export const HomePage = () => {
  return (
    <main>
      <PageHeader>
        <PageTitle>MApp</PageTitle>
        <Heading level={2}>The best app for managing your money</Heading>
      </PageHeader>

      <div className="dashboard">
        <Button
          onClick={() => {
            console.log('Go to transactions')
          }}
        >
          Go To Transactions
        </Button>
      </div>
    </main>
  )
}
