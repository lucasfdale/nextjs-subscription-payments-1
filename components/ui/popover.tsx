'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'end', sideOffset = 25, alignOffset = -10, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={cn(
        'z-40 w-full p-2.5 rounded-[20px]',
        'bg-dark-8 text-orange-95',
        'shadow-[0_0_0_4px_#141414,0_0_5px_10px_rgba(13,13,13,0.7)]',
        'border border-dark-10',
        'relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {props.children}
      <div
        className="
          absolute inset-0 pointer-events-none
          border border-dark-10 rounded-[20px]
        "
      />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
