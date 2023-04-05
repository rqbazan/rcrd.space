import 'tailwindcss/tailwind.css'
import { getJsText } from '@rqbazan/set-initial-color-mode'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { StylesRegister } from './StylesRegister'

export const metadata = {
  title: 'Ricardo Q. Bazan – Software Developer.',
  description:
    "Software developer mostly with NodeJS 💚 I love to write clean beautiful code even when it's unnecessary.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script id="set-initial-color-mode" dangerouslySetInnerHTML={{ __html: getJsText() }} />
      </head>
      <body>
        <main className="flex flex-col min-h-full md:max-w-[42rem] px-6 md:px-4 py-8 md:py-24 mx-auto">
          <Header className="mb-6" />
          <StylesRegister>{children}</StylesRegister>
          <Footer className="mt-auto pt-16" />
        </main>
      </body>
    </html>
  )
}
