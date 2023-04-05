import * as React from 'react'
import { Anchor } from '~/ui/components/anchor'
import { Heading } from '~/ui/components/heading'
import { Hi } from '~/ui/components/Hi'

export default function HomePage() {
  return (
    <Heading
      title={<Hi />}
      content={
        <>
          I&rsquo;m a software developer from Trujillo - Peru. I work as Sr. Software Engineer at{' '}
          <Anchor href="https://www.linkedin.com/company/pedidosya/mycompany">PedidosYa</Anchor>.
          You’ve found my personal place on the internet.
        </>
      }
    />
  )
}
