import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollTop from '@/components/ScrollTop'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'AlexF0x - main page',
    template: '%s - AlexF0x',
  },
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-zinc-900 text-white text-lg antialiased',
          jetBrainsMono.className,
        )}
      >
        <div
          className={cn('flex flex-col min-h-screen max-w-4xl mx-auto px-5')}
        >
          <Header />
          <main className={cn('flex-1')}>{children}</main>
          <Footer />
        </div>
        <ScrollTop />
      </body>
    </html>
  )
}
