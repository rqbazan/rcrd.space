import { MetaFunction } from "@remix-run/node";
import { getImageProps } from "~/utils/get-image-props";

export const defaultMetaFn: MetaFunction = () => {
  const title = "Ricardo Q. Bazan | Software Developer";
  const cannonicalUrl = "https://rcrd.space";
  const description =
    "Software developer mostly with NodeJS 💚 I love to write clean beautiful code even when it's unnecessary.";

  return [
    { title },
    { description },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@rqbazan",
    },
    {
      name: "twitter:creator",
      content: "@rqbazan",
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:url",
      content: cannonicalUrl,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:image",
      content: getImageProps("social/og-image.png").src,
    },
    {
      name: "og:locale",
      content: "en_US",
    },
    {
      name: "og:site_name",
      content: "Ricardo Q. Bazan",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: cannonicalUrl,
    },
  ];
};
