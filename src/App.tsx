import { NavLink } from '@/components/link/NavLink.tsx'
import { GitHubIcon } from '@/icons/github.tsx'
import { Router } from '@/pages/Router.tsx'
import { Layout } from './components/layout/Layout.tsx'
import { Link } from './components/link/Link.tsx'
import { Nav, NavItem } from './components/Nav.tsx'

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/transactions">Transactions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Layout.Header>

      <Layout.Content>
        <Router />
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
