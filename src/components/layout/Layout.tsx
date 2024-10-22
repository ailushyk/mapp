import React from 'react'

import './layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children, ...rest }: LayoutProps) {
  if (React.Children.count(children) !== 3) {
    console.error(
      'Layout component requires exactly 3 children: Header, Content, Footer. Otherwise, the layout will not render correctly.',
    )
  }
  return (
    <div className="layout" {...rest}>
      {children}
    </div>
  )
}

Layout.Header = function Header({ children, ...rest }: LayoutProps) {
  return (
    <div className="layout__header" {...rest}>
      {children}
    </div>
  )
}

Layout.Content = function Content({ children, ...rest }: LayoutProps) {
  return (
    <div className="layout__content" {...rest}>
      {children}
    </div>
  )
}

Layout.Footer = function Footer({ children, ...rest }: LayoutProps) {
  return (
    <footer className="layout__footer" {...rest}>
      {children}
    </footer>
  )
}
