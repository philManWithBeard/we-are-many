import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://philmanwithbeard.github.io",
  base: "/weAreMany",
  integrations: [tailwind()]
});