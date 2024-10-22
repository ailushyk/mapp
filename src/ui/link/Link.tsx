import React from 'react'

import './link.css'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a className="link" {...rest}>
      {children}
    </a>
  )
}
