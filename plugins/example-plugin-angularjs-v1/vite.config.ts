import { defineConfig } from "vite";
import { postBuildPluginManifest } from "@acme/plugin-tools";
import PACKAGE from "./package.json";
import { META } from "./src/meta";

const entrySource = "src/index.ts";

export default defineConfig({
  plugins: [postBuildPluginManifest({ meta: META, version: PACKAGE.version })],
  build: {
    minify: false,
    lib: {
      entry: entrySource,
      formats: ["es"],
      fileName: "index",
    },
  },
  server: {
    port: 5176,
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
