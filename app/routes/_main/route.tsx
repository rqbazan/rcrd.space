// import { Outlet } from "@remix-run/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";

export default function MainLayout() {
  return (
    <main className="flex flex-col min-h-full md:max-w-[42rem] px-6 md:px-4 py-8 md:py-24 mx-auto">
      <Header className="mb-6" />
      <Content />
      <Footer className="mt-auto pt-16" />
    </main>
  );
}
