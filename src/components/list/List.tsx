import React from 'react'

import './list.css'

export const List = (props: { children: React.ReactNode }) => {
  return <div className="list">{props.children}</div>
}
