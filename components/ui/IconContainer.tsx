import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconContainerProps {
  children: ReactNode
  className?: string
}

export const IconContainer: React.FC<IconContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'w-auto h-auto',
        'p-2.5 gap-2.5',
        'rounded-full',
        'bg-[#1e1e1e]',
        'border border-[#1e1e1e]',
        'shadow-[0_0_0_2px_#0f0f0f,inset_1px_1px_3px_#2b2b2b]',
        'overflow-hidden',
        className,
      )}
    >
      {children}
    </div>
  )
}
