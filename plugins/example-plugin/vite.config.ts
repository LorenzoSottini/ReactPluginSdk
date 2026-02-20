import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PluginMeta } from "@acme/plugin-contracts";
import { postBuildPluginManifest } from "@acme/plugin-tools";
import PACKAGE from "./package.json";

export const META = {
  id: "acme.example-plugin",
  name: "Plugin React",
  description: "Plugin ROUTE con React in boundle - 945kb",
  type: "ROUTE",
} as const satisfies PluginMeta;

const entrySource = "src/index.ts";

export default defineConfig({
  plugins: [
    react(),
    postBuildPluginManifest({ meta: META, version: PACKAGE.version }),
  ],
  build: {
    lib: {
      entry: entrySource,
      formats: ["es"],
      fileName: "index",
    },
  },
  server: {
    port: 5174,
    strictPort: true,
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    },
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  },
});
