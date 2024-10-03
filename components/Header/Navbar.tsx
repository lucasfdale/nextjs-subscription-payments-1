import Image from 'next/image'
import { NotificationCenter } from './NotificationCenter'
import { HamburgerMenu } from './HamburgerMenu'

export const Navbar = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between p-4 bg-black shadow-md">
      <NotificationCenter />
      <div className="flex-grow flex justify-center">
        <Image src="/logo.png" alt="App Logo" width={120} height={120} className="blur-sm" />
      </div>
      <HamburgerMenu />
    </nav>
  )
}
