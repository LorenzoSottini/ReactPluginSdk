import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { META } from "./src/meta";
import PACKAGE from "./package.json";
import { postBuildPluginManifest } from "@acme/plugin-tools";

const entrySource = "src/index.ts";

export default defineConfig(({ command }) => ({
  plugins: [
    ...(command === "build" ? [react()] : []),

    postBuildPluginManifest({ meta: META, version: PACKAGE.version }),
  ],
  build: {
    minify: false,
    sourcemap: false,
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
  server: {
    port: 5175,
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
}));
