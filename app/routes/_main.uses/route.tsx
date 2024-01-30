import type { MetaFunction } from "@remix-run/node";
import { Heading } from "~/routes/_main/components/heading";
import { CoverImg } from "~/ui/components/cover-img";
import { Li } from "~/ui/components/li";
import { getImageProps } from "~/utils/get-image-props";

export const meta: MetaFunction = () => {
  return [{ title: "Uses | Ricardo Q. Bazan" }];
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
      <ul className="ml-3 space-y-2">
        <Li>Macbook Pro 16inch 2019</Li>
        <Li>Monitor Dell Ultrasharp 27inch 4K</Li>
        <Li>Magic Keyboard v2</Li>
        <Li>Mouse Logitech Mx Master 3</Li>
      </ul>
      <h3 className="h3 mb-8 mt-9">Chat</h3>
      <ul className="ml-3 space-y-2">
        <Li>Sony Headphones WH-1000XM4 Black</Li>
        <Li>Logitech StreamCam Black</Li>
        <Li>Blue Yeti X Black</Li>
      </ul>
      <h3 className="h3 mb-8 mt-9">Coding</h3>
      <ul className="ml-3 space-y-2">
        <Li>Visual Studio Code</Li>
        <Li>iTerm</Li>
        <Li>JetBrains DataGrip</Li>
        <Li>Docker Desktop</Li>
        <Li>Brave Navigator</Li>
        <Li>Github Desktop</Li>
      </ul>
      <h3 className="h3 mb-8 mt-9">Other</h3>
      <ul className="ml-3 space-y-2">
        <Li>Kindle Paperwhite 10th generation 8GB</Li>
        <Li>Nintendo Switch 2019</Li>
      </ul>
    </>
  );
}
