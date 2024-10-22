import React, { ReactElement } from 'react'

import './nav.css'

const NavContext = React.createContext<boolean>(false)

type NavProps = {
  children: ReactElement<typeof NavItem> | ReactElement<typeof NavItem>[]
}

const Nav = ({ children }: NavProps) => (
  <NavContext.Provider value={true}>
    <nav aria-label="Main navigation">
      <ul className="nav">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === NavItem) {
            return child
          }
          throw new Error(
            'Nav component only accepts NavItem components as children',
          )
        })}
      </ul>
    </nav>
  </NavContext.Provider>
)

const NavItem = ({ children }: { children: React.ReactNode }) => {
  const isNavOpen = React.useContext(NavContext)

  if (!isNavOpen) {
    throw new Error('NavItem must be rendered within a Nav component')
  }

  return <li>{children}</li>
}

export { Nav, NavItem }
