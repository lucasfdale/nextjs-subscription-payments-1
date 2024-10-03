import { Metadata } from 'next'
import { Navbar } from '@/components/Header/Navbar'
import { Toaster } from '@/components/ui/Toasts/toaster'
import { PropsWithChildren, Suspense } from 'react'
import { getURL } from '@/utils/helpers'
import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

const title = 'Next.js Subscription Starter'
const description = 'Brought to you by Vercel, Stripe, and Supabase.'

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-background text-foreground`}>
        <Navbar />
        <Suspense>
          <Toaster />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
