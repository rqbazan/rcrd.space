import * as React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import { MainHeading } from '~/layouts'
import { Anchor } from '~/ui'

export function HomeView() {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
    >
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
    </motion.div>
  )
}
