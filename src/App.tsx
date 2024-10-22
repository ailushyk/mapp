import { GitHubIcon } from '@/icons/github.tsx'
import { Layout } from './components/layout/Layout.tsx'
import { Link } from './components/Link.tsx'
import { Nav, NavItem } from './components/Nav.tsx'
import { TransactionsPage } from './pages/transactions/TransactionsPage.tsx'

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Nav>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/transactions">Transactions</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
        </Nav>
      </Layout.Header>

      <Layout.Content>
        <TransactionsPage />
      </Layout.Content>

      <Layout.Footer>
        <p>&copy; 2024 MApp</p>
        <Link
          href="https://github.com/ailushyk/mapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon /> GitHub
        </Link>
      </Layout.Footer>
    </Layout>
  )
}

export default App
