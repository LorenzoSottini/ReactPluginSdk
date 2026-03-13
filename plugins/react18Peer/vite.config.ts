import { defineConfig } from "vite";
import { pluginManifest } from "@acme/plugin-tools";
import PACKAGE from "./package.json";
import { META } from "./src/meta";
import react from "@vitejs/plugin-react";

const entrySource = "src/index.ts";

const REACT18_CDN = {
  react: "https://esm.sh/react@18.3.1",
  "react-dom": "https://esm.sh/react-dom@18.3.1",
  "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
  "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
  "react/jsx-dev-runtime": "https://esm.sh/react@18.3.1/jsx-dev-runtime",
} as const;

const REACT_EXTERNALS = Object.keys(REACT18_CDN);

export default defineConfig({
  plugins: [react(), pluginManifest({ meta: META, version: PACKAGE.version })],
  resolve: {
    alias: Object.entries(REACT18_CDN).map(([find, replacement]) => ({
      find,
      replacement,
    })),
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5178,
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
      external: REACT_EXTERNALS,
      output: {
        paths: REACT18_CDN,
      },
    },
  },
});
