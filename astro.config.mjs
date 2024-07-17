import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { BASE_URL } from "./src/utils/seo-config";

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap({
      changefreq: "daily",
      lastmod: new Date(),
    }),
  ],
  // TODO change to static when astro/env is supported:
  // The feature "astro:env getSecret" is experimental and subject to change (used by @astrojs/vercel/serverless).
  // `output: "server"` or `output: "hybrid"` is required to use the serverless adapter.
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
