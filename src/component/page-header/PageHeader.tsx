import './page-header.css'

import React from 'react'

export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="page-header">{children}</header>
}
