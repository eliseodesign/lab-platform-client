import type { Metadata } from 'next'
import { NavBar } from '@/shared/components/'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FABLAB ESFE',
  description: 'Un laboratorio para innovar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
      </body>
    </html>
  )
}
