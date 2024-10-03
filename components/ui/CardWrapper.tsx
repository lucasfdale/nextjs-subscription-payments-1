import React from 'react'
import { cn } from '@/lib/utils'

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
}

export const CardWrapper: React.FC<CardWrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-start justify-center',
        'w-full p-2.5 gap-2.5 rounded-[20px]',
        'bg-dark-8 text-white',
        'shadow-[0_0_0_4px_#141414,0_0_5px_10px_rgba(13,13,13,0.7)]',
        'border border-dark-10',
        'relative overflow-hidden',
        className,
      )}
    >
      {children}
      <div
        className="
          absolute inset-0 pointer-events-none
          border border-dark-10 rounded-[20px]
        "
      />
    </div>
  )
}

export default CardWrapper
