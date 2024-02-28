import type { MetaFunction } from "@remix-run/react"
import Typewriter from "typewriter-effect"
import { Heading } from "~/routes/_main/components/heading"
import { Anchor } from "~/ui/components/anchor"

export const meta: MetaFunction = () => {
  return [{ title: "Ricardo Q. Bazan | Software Engineer" }]
}

export default function IndexPage() {
  return (
    <Heading
      title={
        <>
          Hey, I&apos;m{" "}
          <Typewriter
            options={{
              strings: ["Santiago", "Ricardo", "Alexis", "Rick"],
              autoStart: true,
              loop: true,
            }}
          />
        </>
      }
      content={
        <>
          I&apos;m a software developer from Trujillo - Peru. I work as Sr.
          Software Engineer at{" "}
          <Anchor href="https://www.linkedin.com/company/pedidosya/mycompany">
            PedidosYa
          </Anchor>
          . You&apos;ve found my personal place on the internet.
        </>
      }
    />
  )
}
