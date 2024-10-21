import { ReactNode } from 'react'

import './list.css'

export const List = (props: { children: ReactNode }) => {
  return <div className="list">{props.children}</div>
}
