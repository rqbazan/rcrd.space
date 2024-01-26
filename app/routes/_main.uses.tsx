import type { MetaFunction } from "@remix-run/node";
import { CoverImg } from "~/ui/components/cover-img";
import { Li } from "~/ui/components/li";
import { Heading } from "./_main/components/heading";
import { getImageProps } from "~/utils/get-image-props";

export const meta: MetaFunction = () => {
  return [{ title: "Uses" }];
};

export default function UsesPage() {
  return (
    <>
      <Heading
        title="Uses"
        content={`Here's what tech I'm currently using for coding, studying or chill. Most of these have been accumulated over the past ${
          new Date().getFullYear() - 2017
        } years.`}
      />
      <CoverImg
        {...getImageProps("covers/uses-v3")}
        width={1344}
        height={1008}
        alt="My office 2021"
        className="mb-9"
        description="Photo by Me at my home office"
      />
      <h3 className="h3 mb-8">Desktop</h3>
      <ul className="space-y-2 ml-3">
        <Li>Macbook Pro 16inch 2019</Li>
        <Li>Monitor Dell Ultrasharp 27inch 4K</Li>
        <Li>Magic Keyboard v2</Li>
        <Li>Mouse Logitech Mx Master 3</Li>
      </ul>
      <h3 className="h3 mt-9 mb-8">Chat</h3>
      <ul className="space-y-2 ml-3">
        <Li>Sony Headphones WH-1000XM4 Black</Li>
        <Li>Logitech StreamCam Black</Li>
        <Li>Blue Yeti X Black</Li>
      </ul>
      <h3 className="h3 mt-9 mb-8">Coding</h3>
      <ul className="space-y-2 ml-3">
        <Li>Visual Studio Code</Li>
        <Li>iTerm</Li>
        <Li>JetBrains DataGrip</Li>
        <Li>Docker Desktop</Li>
        <Li>Brave Navigator</Li>
        <Li>Github Desktop</Li>
      </ul>
      <h3 className="h3 mt-9 mb-8">Other</h3>
      <ul className="space-y-2 ml-3">
        <Li>Kindle Paperwhite 10th generation 8GB</Li>
        <Li>Nintendo Switch 2019</Li>
      </ul>
    </>
  );
}
