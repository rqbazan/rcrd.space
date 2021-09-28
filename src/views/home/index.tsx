import * as React from 'react'
import Typewriter from 'typewriter-effect'

import { MainHeading } from '~/layouts'
import { Anchor } from '~/ui'

export function HomeView() {
  return (
    <React.Fragment>
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
            I&rsquo;m a sofware developer from Trujillo - Peru. I work as the Frontend Lead at{' '}
            <Anchor href="https://riqra.com">Riqra</Anchor>. You’ve found my personal place of the
            internet.
          </React.Fragment>
        }
      />
    </React.Fragment>
  )
}
