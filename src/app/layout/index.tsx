import 'tailwindcss/tailwind.css'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { DarkModeRegister } from './DarkModeRegister'
import { LayoutAnimatePresence } from './LayoutAnimatePresence'
import { StylesRegister } from './StylesRegister'

const ibmPlexFont = localFont({
  src: '../../../public/fonts/ibm-plex-sans-var.woff2',
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexFont.className}>
      <body>
        <main className="flex flex-col min-h-full md:max-w-[42rem] px-6 md:px-4 py-8 md:py-24 mx-auto">
          <Header className="mb-6" />
          <DarkModeRegister>
            <StylesRegister>
              <LayoutAnimatePresence>{children}</LayoutAnimatePresence>
            </StylesRegister>
          </DarkModeRegister>
          <Footer className="mt-auto pt-16" />
        </main>
        <Analytics />
      </body>
    </html>
  )
}

export { metadata } from './metadata'
