import { Layout } from './component/layout/Layout.tsx'
import { Link } from './component/Link.tsx'
import { Nav, NavItem } from './component/Nav.tsx'
import { TransactionsPage } from './pages/TransactionsPage.tsx'

import './App.css'

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
        <footer>
          <p>&copy; 2024 MApp</p>
        </footer>
      </Layout.Footer>
    </Layout>
  )
}

export default App
