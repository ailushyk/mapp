import { Router } from '@/pages/Router.tsx'
import { Layout } from '@/components/layout/Layout.tsx'
import { Nav, NavItem } from '@/components/nav/Nav.tsx'
import { Link } from '@/ui/link/Link.tsx'
import { NavLink } from '@/ui/link/NavLink.tsx'
import { GitHubIcon } from '@/icons/github.tsx'

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
