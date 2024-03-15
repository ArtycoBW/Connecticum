import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { dark } from '@clerk/themes'
import { ClerkProvider } from '@clerk/nextjs'
import { ruRU } from '@clerk/localizations'

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: 'Connecticum',
  description: 'Application for conducting online meetings and interviews'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-primary text-primary-foreground hover:bg-primary/90'
        },
        variables: {
          colorPrimary: '#9563e8',
          colorText: '#ece8f8'
        },
        baseTheme: dark
      }}
      localization={ruRU}
    >
      <html lang='en'>
        <body
          className={cn('font-IBMPlexSans antialiased', IBMPlexSans.variable)}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
