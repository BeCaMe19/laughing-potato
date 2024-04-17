import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from '@/components/NavMenu'
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import Navbar from '@/components/NavBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
        <Navbar />
         <NavMenu  /> 
          {children}
          
          </SessionProvider>
      </body>
    </html>
  )
}