import type { MetaFunction } from "@remix-run/node";
import Typewriter from "typewriter-effect";
import { Anchor } from "~/ui/components/anchor";
import { Heading } from "./_main/components/heading";

export const meta: MetaFunction = () => {
  return [{ title: "Ricardo Q. Bazan – Software Developer." }];
};

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
  );
}
