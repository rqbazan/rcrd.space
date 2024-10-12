import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig, envField } from "astro/config";
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
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  env: {
    schema: {
      CLOUDINARY_CLOUD_NAME: envField.string({
        access: "public",
        context: "server",
      }),
      CLOUDINARY_FOLDER_NAME: envField.string({
        access: "public",
        context: "server",
      }),
    },
  },
});
