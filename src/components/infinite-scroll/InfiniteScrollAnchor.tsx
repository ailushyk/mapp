import React from 'react'
import { InView } from 'react-intersection-observer'

export const InfiniteScrollAnchor = ({
  children,
  loadMore,
}: {
  children?: React.ReactNode
  loadMore?: (inView: boolean) => Promise<void>
}) => {
  return (
    <InView className="infinite-scroll-anchor" onChange={loadMore}>
      {children}
    </InView>
  )
}
