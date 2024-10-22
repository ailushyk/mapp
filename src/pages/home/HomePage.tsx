import { Button } from '../../components/button/Button.tsx'
import { Header } from '../../components/header/Header.tsx'
import { Heading } from '../../components/Heading.tsx'
import { PageTitle } from '../../components/page-title/PageTitle.tsx'

import './home-page.css'

export default function HomePage() {
  return (
    <main>
      <Header>
        <PageTitle>MApp</PageTitle>
        <Heading level={2}>The best app for managing your money</Heading>
      </Header>

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
