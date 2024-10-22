import { PageTitle } from '@/components/page-title/PageTitle.tsx'
import { Header } from '@/ui/header/Header.tsx'
import { Heading } from '@/ui/Heading.tsx'
import { NavLink } from '@/ui/link/NavLink.tsx'

import './home-page.css'

export default function HomePage() {
  return (
    <main>
      <Header className="text-center">
        <PageTitle>MApp</PageTitle>
        <Heading level={2}>The best app for managing your money</Heading>
      </Header>

      <div className="dashboard">
        <NavLink href="/transactions">Go To Transactions</NavLink>
      </div>
    </main>
  )
}
