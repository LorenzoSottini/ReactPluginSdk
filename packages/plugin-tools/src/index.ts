import {
  CONTRACT_VERSION,
  type PluginManifest,
  type PluginMeta,
} from "@acme/plugin-contracts";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Plugin } from "vite";

export type PostBuildPluginManifestOptions = {
  meta: PluginMeta;
  version: string;
  distDir?: string;
  entry?: string;
  manifestFileName?: string;
  pluginName?: string;
};

export function postBuildPluginManifest({
  meta,
  version,
  distDir = "dist",
  entry = "index.js",
  manifestFileName = "manifest.json",
  pluginName = "acme:post-build-plugin-manifest",
}: PostBuildPluginManifestOptions): Plugin {
  return {
    name: pluginName,
    async closeBundle() {
      const pluginManifest = {
        ...meta,
        contractVersion: CONTRACT_VERSION,
        version,
        entry,
      } satisfies PluginManifest;

      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest, null, 2)}\n`,
      );
    },
  };
}
