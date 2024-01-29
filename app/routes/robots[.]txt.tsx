import { LoaderFunction } from "@remix-run/node";
import dedent from "dedent";
import { BASE_PROD_URL } from "~/hooks/useCanonicalUrl";

export const loader: LoaderFunction = async () => {
  const robotsText = dedent`
    User-Agent: *

    Host: ${BASE_PROD_URL}
    Sitemap: ${BASE_PROD_URL}/sitemap.xml
  `;

  return new Response(robotsText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "x-content-type-options": "nosniff",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};
