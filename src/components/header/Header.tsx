import React from 'react'

import './page-header.css'

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className="page-header">{children}</header>
}
