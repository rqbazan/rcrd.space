import { LoaderFunction } from "@remix-run/node";
import dedent from "dedent";
import { BASE_PROD_URL } from "~/hooks/useCanonicalUrl";

const renderXML = (routes: string[]) => {
  const lastMod = new Date().toISOString().split("T")[0];

  const routeTemplate = (route: string) =>
    `<url>
      <loc>${BASE_PROD_URL}${route}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>`;

  const sourceXML = dedent`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(routeTemplate).join("\n")}
    </urlset>
  `;

  return sourceXML;
};

export const loader: LoaderFunction = async () => {
  const routes = ["/", "/uses", "/projects"];

  return new Response(renderXML(routes), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};
