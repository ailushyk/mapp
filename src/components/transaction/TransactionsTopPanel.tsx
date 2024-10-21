import { ReactNode } from 'react'

import './transactions-top-panel.css'

export function TransactionsTopPanel(props: { children: ReactNode }) {
  return <div className="transactions-top-panel">{props.children}</div>
}
