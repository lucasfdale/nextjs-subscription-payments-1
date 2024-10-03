'use client'

import { CustomButton } from '../ui/CustomButton'
import { usePathname, useRouter } from 'next/navigation'
import { SignOut } from '@/utils/auth-helpers/server'
import { handleRequest } from '@/utils/auth-helpers/client'
import { getRedirectMethod } from '@/utils/auth-helpers/settings'
import { Menu } from 'lucide-react'
import { IconContainer } from '../ui/IconContainer'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { forwardRef } from 'react'

export const HamburgerMenu = (): JSX.Element => {
  const router = getRedirectMethod() === 'client' ? useRouter() : null
  const pathname = usePathname()

  const menuItems = [
    { label: 'Trials', path: '/dashboard/trials' },
    { label: 'Calendar', path: '/dashboard/calendar' },
    { label: 'Subscription', path: '/dashboard/subscription' },
    { label: 'Referral', path: '/dashboard/referral' },
    { label: 'Recent Discoveries', path: '/dashboard/discoveries' },
    { label: 'Help', path: '/dashboard/help' },
    { label: 'Settings', path: '/dashboard/settings' },
  ]

  const MenuButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    (props, ref) => (
      <IconContainer className="rounded-lg">
        <button ref={ref} className="p-0" {...props}>
          <Menu className="w-6 h-6 text-orange-95" />
          <span className="sr-only">Menu</span>
        </button>
      </IconContainer>
    ),
  )
  MenuButton.displayName = 'MenuButton'

  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuButton />
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-2 flex flex-col items-center space-y-2 w-full">
          {menuItems.map((item) => (
            <div key={item.path} className="w-full">
              <CustomButton href={item.path} isActive={pathname === item.path} className="text-lg">
                {item.label}
              </CustomButton>
            </div>
          ))}
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={pathname} />
            <button type="submit" className="py-2 pt-4 text-lg text-orange-90">
              Sign out
            </button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
