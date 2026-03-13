import { defineConfig } from "vite";
import { postBuildPluginManifest } from "@acme/plugin-tools";
import PACKAGE from "./package.json";
import { META } from "./src/meta";
import react from "@vitejs/plugin-react";
const entrySource = "src/index.ts";

export default defineConfig({
  plugins: [
    react(),
    postBuildPluginManifest({ meta: META, version: PACKAGE.version }),
  ],
  server: {
    port: 5180,
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
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: entrySource,
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },
  },
});
