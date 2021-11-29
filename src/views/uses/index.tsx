import * as React from 'react'

import { MainHeading, MainTransition } from '~/layouts'
import { Cover, Li, Typography } from '~/ui'

export function UsesView() {
  return (
    <MainTransition>
      <MainHeading
        title="Uses"
        content={`Here's what tech I'm currently using for coding, studying or chill. Most of these have been accumulated over the past ${
          new Date().getFullYear() - 2017
        } years.`}
      />
      <Cover
        src="/img/cover/uses-v2.webp"
        alt="My office 2021"
        height={758}
        width={1008}
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoEAAMAAUAmJYgCdLoAAwj3j3AA/vNVvvznom3i88rPZ8D9H9Q62K7flf03xTcMWN+nf9u9TMjMNGABQmHUAAAA"
      />
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Computer
      </Typography>
      <ul className="space-y-6">
        <Li>
          Dell Inspiron Gaming 2017 Laptop, 16 GB RAM, 256GB SSD, 1TB HDD, Intel Core i7-7700HQ
          2.80GHz, Windows 10 Pro
        </Li>
        <Li>Monitor Dell Ultrasharp 27inch 4K</Li>
        <Li>Magic Mouse v2, Magic Keyboard v2, Airpods v1 and IPhone 7 Plus 128GB</Li>
        <Li>Mouse Razer Deathadder V2 Mini</Li>
        <Li>Mouse Logitech Mx Master 3</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Chat
      </Typography>
      <ul className="space-y-6">
        <Li>Sony Headphones WH-1000XM4 Black</Li>
        <Li>Logitech StreamCam Black</Li>
        <Li>Blue Yeti X Black</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Coding
      </Typography>
      <ul className="space-y-6">
        <Li>Visual Studio Code</Li>
        <Li>Window Terminal + Cmder</Li>
        <Li>JetBrains DataGrip</Li>
        <Li>Docker Desktop</Li>
        <Li>Brave Navigator</Li>
        <Li>Github Desktop</Li>
      </ul>
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Other
      </Typography>
      <ul className="space-y-6">
        <Li>Kindle Paperwhite 10th generation 8GB</Li>
        <Li>Nintendo Switch 2019</Li>
      </ul>
    </MainTransition>
  )
}
