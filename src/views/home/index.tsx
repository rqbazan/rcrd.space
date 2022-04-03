import * as React from 'react'
import Typewriter from 'typewriter-effect'
import { Anchor } from '~/ui'
import { MainHeading, MainTransition } from '~/ui/layouts'

export function HomeView() {
  return (
    <MainTransition>
      <MainHeading
        title={
          <React.Fragment>
            Hey, I’m{' '}
            <Typewriter
              options={{
                strings: ['Santiago', 'Ricardo', 'Alexis'],
                autoStart: true,
                loop: true,
              }}
            />
          </React.Fragment>
        }
        content={
          <React.Fragment>
            I&rsquo;m a software developer from Trujillo - Peru. I work as Sr. Software Engineer at{' '}
            <Anchor href="https://www.linkedin.com/company/pedidosya/mycompany">PedidosYa</Anchor>.
            You’ve found my personal place on the internet.
          </React.Fragment>
        }
      />
    </MainTransition>
  )
}
