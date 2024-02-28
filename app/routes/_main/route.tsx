import { Content } from "./components/content"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

export default function MainLayout() {
  return (
    <main className="mx-auto flex min-h-full flex-col px-6 py-8 md:max-w-[42rem] md:px-4 md:py-24">
      <Header className="mb-6" />
      <Content />
      <Footer className="mt-auto pt-16" />
    </main>
  )
}
