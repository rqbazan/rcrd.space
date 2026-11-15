import astro from "@rrlab/astro-plugin";
import biome from "@rrlab/biome-plugin";
import { defineConfig } from "@rrlab/cli/config";

export default defineConfig({
  plugins: [biome(), astro()],
});
