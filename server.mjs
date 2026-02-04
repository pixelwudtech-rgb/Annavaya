import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Start Astro SSR server
await import(path.join(__dirname, "dist/server/entry.mjs"));
