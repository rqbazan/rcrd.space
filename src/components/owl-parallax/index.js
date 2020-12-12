import React from 'react'
import { animated } from 'react-spring'
import OwlImage from '../owl-image'
import { useMouseMoveParallax } from '~/hooks/use-mouse-move-parallax'
import { useRandomMouseMove } from '~/hooks/use-random-mouse-move'

const AnimatedOwlImage = animated(OwlImage)

export default function OwlParallax() {
  const { style } = useMouseMoveParallax()

  useRandomMouseMove()

  return <AnimatedOwlImage style={style} />
}
