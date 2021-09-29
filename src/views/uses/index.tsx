import * as React from 'react'

import { MainHeading } from '~/layouts'
import { Cover, Li, Typography } from '~/ui'

export function UsesView() {
  return (
    <React.Fragment>
      <MainHeading
        title="Uses"
        content={`Here's what tech I'm currently using for coding, studying or chill. Most of these have been accumulated over the past ${
          new Date().getFullYear() - 2017
        } years.`}
      />
      <Cover
        src="/img/cover/uses.webp"
        alt="My office 2021"
        height={758}
        width={1008}
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoEAAMAAUAmJYgCdLoAAwj3j3AA/vNVvvznom3i88rPZ8D9H9Q62K7flf03xTcMWN+nf9u9TMjMNGABQmHUAAAA"
        data-splitbee-event="Interact With Uses Cover"
      />
      <Typography className="mt-9 mb-8" fontStyle="h3">
        Office
      </Typography>
      <ul className="space-y-6">
        <Li>
          Dell Inspiron Gaming 2017 Laptop, 16 GB RAM, 256GB SSD, 1TB HDD, Intel Core i7-7700HQ
          2.80GHz, Windows 10 Pro
        </Li>
        <Li>Monitor Dell Ultrasharp 27inch 4K</Li>
        <Li>Magic Mouse v2, Magic Keyboard v2, Airpods v1 and IPhone 7 Plus 128GB</Li>
        <Li>Sony Headphones WH-1000XM4 Black</Li>
        <Li>Mouse Razer Deathadder V2 Mini</Li>
        <Li>Kindle Paperwhite 10th generation 8GB</Li>
        <Li>Nintendo Switch 2019</Li>
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
    </React.Fragment>
  )
}
