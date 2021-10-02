import * as React from 'react'
import Typewriter from 'typewriter-effect'

import { MainHeading, MainTransition } from '~/layouts'
import { Anchor } from '~/ui'

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
            I&rsquo;m a sofware developer from Trujillo - Peru. I work as Frontend Lead at{' '}
            <Anchor href="https://riqra.com">Riqra</Anchor>. You’ve found my personal place of the
            internet.
          </React.Fragment>
        }
      />
    </MainTransition>
  )
}
