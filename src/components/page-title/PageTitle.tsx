import React from 'react'

import { Heading } from '@/ui/Heading.tsx'

import './page-title.css'

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading level={1} className="page-title">
      {children}
    </Heading>
  )
}
