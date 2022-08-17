import * as React from 'react'
import { usePageProps } from '~/hooks'
import { CoverImage, Li, Typography } from '~/ui'
import { MainHeading, MainTransition } from '~/ui/layouts'

export function UsesView() {
  const { coverImageProps } = usePageProps()

  return (
    <MainTransition>
      <MainHeading
        title="Uses"
        content={`Here's what tech I'm currently using for coding, studying or chill. Most of these have been accumulated over the past ${
          new Date().getFullYear() - 2017
        } years.`}
      />
      <CoverImage
        {...coverImageProps}
        priority
        alt="My office 2021"
        className="mb-9"
        description="Photo by Me at my home office"
      />
      <Typography className="mb-8" fontStyle="h3">
        Desktop
      </Typography>
      <ul className="space-y-2 ml-3">
        <Li>Macbook Pro 16inch 2019</Li>
        <Li>Monitor Dell Ultrasharp 27inch 4K</Li>
        <Li>Magic Keyboard v2</Li>
        <Li>Mouse Logitech Mx Master 3</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Chat
      </Typography>
      <ul className="space-y-2 ml-3">
        <Li>Sony Headphones WH-1000XM4 Black</Li>
        <Li>Logitech StreamCam Black</Li>
        <Li>Blue Yeti X Black</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Coding
      </Typography>
      <ul className="space-y-2 ml-3">
        <Li>Visual Studio Code</Li>
        <Li>iTerm</Li>
        <Li>JetBrains DataGrip</Li>
        <Li>Docker Desktop</Li>
        <Li>Brave Navigator</Li>
        <Li>Github Desktop</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Other
      </Typography>
      <ul className="space-y-2 ml-3">
        <Li>Kindle Paperwhite 10th generation 8GB</Li>
        <Li>Nintendo Switch 2019</Li>
      </ul>
    </MainTransition>
  )
}
