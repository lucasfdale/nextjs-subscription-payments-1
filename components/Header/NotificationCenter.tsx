import { Bell } from 'lucide-react'
import { IconContainer } from '../ui/IconContainer'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

export const NotificationCenter = (): JSX.Element => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconContainer className="rounded-lg">
          <button className="p-0">
            <Bell className="w-6 h-6 text-orange-95" />
            <span className="sr-only">Notifications</span>
          </button>
        </IconContainer>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={15} alignOffset={5}>
        {/* Add your notification content here */}
        <div className="h-80 w-full p-2.5">Your notifications will appear here</div>
      </PopoverContent>
    </Popover>
  )
}
