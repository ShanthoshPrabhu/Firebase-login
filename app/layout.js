"use client"

import './globals.css'

import NextAuthSessionProvider from './providers/sessionProvider'


export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body >
      <NextAuthSessionProvider>
       {children}
      </NextAuthSessionProvider>
      </body>
    </html>
  )
}
