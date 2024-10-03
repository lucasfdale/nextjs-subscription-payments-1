import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  children,
  isActive = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles =
    'flex items-center justify-center w-full min-h-[52px] px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none cursor-pointer'

  const normalStyles =
    'bg-dark-10 shadow-[inset_1px_2px_3px_0px_#1f1f1f,inset_-1px_-2px_3px_0px_rgba(20,20,20,1),0px_0px_0px_2px_#0f0f0f] hover:bg-dark-12'

  const activeStyles =
    'bg-orange-50 shadow-[inset_0px_2px_2px_0px_#e94b2f,inset_0px_-1px_2px_1px_#b92c13,0px_0px_0px_2px_#0f0f0f]'

  const buttonContent = (
    <button
      className={cn(baseStyles, isActive ? activeStyles : normalStyles, className)}
      onClick={onClick}
      {...props}
    >
      <span className="font-medium text-gray-90 leading-8">{children}</span>
    </button>
  )

  if (href) {
    return (
      <Link href={href} passHref>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

export default CustomButton
