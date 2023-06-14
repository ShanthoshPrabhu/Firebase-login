"use client"

import { ReactNode } from 'react'
import './globals.css'

// import NextAuthSessionProvider from './providers/sessionProvider'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: ReactNode;
  session:any;
}
export default function RootLayout({
  children 
}:Props) {
  return (
    <html lang="en">
      <body >
      <SessionProvider>
       {children}
      </SessionProvider>
      </body>
    </html>
  )
}

