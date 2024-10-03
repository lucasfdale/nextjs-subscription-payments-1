import React from 'react'
import { cn } from '@/lib/utils'

interface TextCardProps {
  text: string
  className?: string
}

export const TextCard: React.FC<TextCardProps> = ({ text, className = '' }) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-start justify-start',
        'w-full min-h-fit',
        'p-2.5 gap-1.5',
        'rounded-[14px]',
        'bg-dark-10',
        'border border-dark-10',
        'shadow-[0_0_0_2px_#0f0f0f,inset_1px_2px_2px_#3339,inset_0_-2px_1px_#1e1e1e,1px_1px_6px_2px_#0f0f0f80]',
        'overflow-hidden',
        className,
      )}
    >
      <div className="w-full h-auto">
        <p
          className="
            font-['Manrope',sans-serif]
            text-sm font-medium
            leading-[150%]
            text-gray-60
            whitespace-pre-wrap
            break-words
          "
        >
          {text}
        </p>
      </div>
      <div
        className="
          absolute inset-0
          border border-dark-10
          rounded-[14px]
          pointer-events-none
        "
      />
    </div>
  )
}

export default TextCard
