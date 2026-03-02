import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { RenderedFile } from "plugin-templates";

export function writeRenderedFiles(targetPath: string, files: RenderedFile[]): void {
  for (const file of files) {
    const destination = join(targetPath, file.relativePath);
    mkdirSync(dirname(destination), { recursive: true });
    writeFileSync(destination, file.content, "utf8");
  }
}

export function ensureTargetDirectory(targetPath: string): void {
  mkdirSync(targetPath, { recursive: true });
}
