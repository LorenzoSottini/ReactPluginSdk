import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { META } from "./src/meta";
import PACKAGE from "./package.json";
import { CONTRACT_VERSION, PluginManifest } from "@acme/plugin-contracts";

import path from "node:path";
import fs from "node:fs/promises";

const entrySource = "src/index.ts";

function postBuildPluginManifest() {
  return {
    name: "acme:post-build-plugin-manifest",
    async closeBundle() {
      const distDir = "./dist";
      const entryKey = `index.js`;

      const pluginManifest = {
        ...META,
        contractVersion: CONTRACT_VERSION,
        version: PACKAGE.version,
        entry: entryKey,
      } satisfies PluginManifest;

      await fs.writeFile(
        path.join(distDir, "manifest.json"),
        JSON.stringify(pluginManifest, null, 2),
      );
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [
    ...(command === "build" ? [react()] : []),
    postBuildPluginManifest(),
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
