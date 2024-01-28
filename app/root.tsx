import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import globalStylesheet from "./ui/globals.css";
import { ColorModeScript } from "./components/color-mode-script";
import { EnvScript } from "./components/env-script";
import { useCanonicalUrl } from "./hooks/useCanonicalUrl";
import { env } from "./env";
import { getImageProps } from "./utils/get-image-props";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: globalStylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader() {
  return json({ env });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const canonicalUrl = useCanonicalUrl();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeScript />
        <EnvScript env={data.env} />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Ricardo Q. Bazan | Software Engineer" />
        <meta
          name="og:description"
          content="I'm a software engineer mostly with NodeJS 💚 I love to write clean beautiful code even when it's unnecessary."
        />
        <meta name="og:url" content={canonicalUrl} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Ricardo Q. Bazan" />
        <meta name="og:locale" content="en" />
        <meta
          name="og:image"
          content={getImageProps("social/og-image.png").src}
        />
        <meta name="twitter:site" content="@rqbazan" />
        <meta name="twitter:creator" content="@rqbazan" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="preload" href={globalStylesheet} as="style" />
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
