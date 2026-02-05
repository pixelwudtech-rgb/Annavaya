import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // ✅ Required for Vercel
  output: "server",

  // ✅ Vercel adapter
  adapter: vercel(),

  integrations: [
    react(),
    tailwind(),
  ],

  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
