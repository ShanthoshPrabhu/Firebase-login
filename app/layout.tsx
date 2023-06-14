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

// import { Session } from 'next-auth'
// import { headers } from 'next/headers'
// import AuthContext from './AuthContext';

// async function getSession(cookie: string): Promise<Session> {
//   const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
//     headers: {
//       cookie,
//     },
//   });

//   const session = await response.json();

//   return Object.keys(session).length > 0 ? session : null;
// }

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode,
// }) {
//   const session = await getSession(headers().get('cookie') ?? '');
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <AuthContext session={session}>
//           {children}
//         </AuthContext>
//       </body>
//     </html>
//   )
// }