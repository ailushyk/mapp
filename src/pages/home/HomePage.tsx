import { NavLink } from '@/components/link/NavLink.tsx'
import { Header } from '../../components/header/Header.tsx'
import { Heading } from '../../components/Heading.tsx'
import { PageTitle } from '../../components/page-title/PageTitle.tsx'

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
