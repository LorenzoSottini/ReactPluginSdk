import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["@acme/plugin-contracts", "node:fs/promises", "node:path"],
    },
  },
});
