import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 🔴 IMPORTANT: static ❌ → server ✅
  output: "server",

  // ✅ Required for Hostinger VPS / Cloud
  adapter: node({
    mode: "standalone",
  }),

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
