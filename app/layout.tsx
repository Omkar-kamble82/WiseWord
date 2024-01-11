import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/custom/Footer'

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WiseWord | Your Gateway to Intelligent Blogging Experiences',
  description: 'WiseWord redefines the blogging landscape by introducing an intuitive blog app accompanied by an AI chat bot. Utilizing vector embedding technology, our platform transforms your reading experience into a dynamic and insightful journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
