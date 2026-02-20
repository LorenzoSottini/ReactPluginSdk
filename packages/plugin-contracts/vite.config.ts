import { defineConfig } from "vite";
import fs from "node:fs/promises";
import path from "node:path";

function copySchemasPlugin() {
  return {
    name: "acme:copy-schemas",
    async writeBundle() {
      const sourceDir = path.resolve("schemas");
      const targetDir = path.resolve("dist/schemas");
      await fs.mkdir(targetDir, { recursive: true });
      await fs.cp(sourceDir, targetDir, { recursive: true });
    },
  };
}

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [copySchemasPlugin()],
});
