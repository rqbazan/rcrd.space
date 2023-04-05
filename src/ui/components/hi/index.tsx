'use client'
import Typewriter from 'typewriter-effect'

export function Hi() {
  return (
    <>
      Hey, I’m{' '}
      <Typewriter
        options={{
          strings: ['Santiago', 'Ricardo', 'Alexis', 'Rick'],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  )
}
