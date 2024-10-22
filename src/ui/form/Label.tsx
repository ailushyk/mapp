import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import cn from 'clsx'

import './form.css'

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn('label', className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName
