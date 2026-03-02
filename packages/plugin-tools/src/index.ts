import {
  composeTagName,
  CONTRACT_VERSION,
  type PluginManifest,
  type PluginMeta,
} from "@acme/plugin-contracts";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

export type PluginManifestOptions = {
  meta: PluginMeta;
  version: string;
  devEntry?: string;
  buildEntry?: string;
  distDir?: string;
  manifestFileName?: string;
  pluginName?: string;
};

export type PostBuildPluginManifestOptions = {
  meta: PluginMeta;
  version: string;
  distDir?: string;
  entry?: string;
  manifestFileName?: string;
  pluginName?: string;
};

function toPublicPath(entryPath: string): string {
  const normalized = entryPath.replace(/\\/g, "/");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

function createPluginManifest(
  meta: PluginMeta,
  version: string,
  entry: string,
): PluginManifest {
  return {
    ...meta,
    tagName: composeTagName(meta.id, meta.type),
    contractVersion: CONTRACT_VERSION,
    version,
    entry,
  } satisfies PluginManifest;
}

export function pluginManifest({
  meta,
  version,
  devEntry = "src/index.ts",
  buildEntry = "index.js",
  distDir = "dist",
  manifestFileName = "manifest.json",
  pluginName = "acme:plugin-manifest",
}: PluginManifestOptions): Plugin {
  let resolvedConfig: ResolvedConfig | undefined;

  return {
    name: pluginName,
    configResolved(config) {
      resolvedConfig = config;
    },
    configureServer(server) {
      const manifestRoute = toPublicPath(manifestFileName);

      server.middlewares.use((req, res, next) => {
        const requestPath = req.url?.split("?")[0];
        if (requestPath !== manifestRoute) {
          next();
          return;
        }

        const pluginManifest = createPluginManifest(
          meta,
          version,
          toPublicPath(devEntry),
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(`${JSON.stringify(pluginManifest, null, 2)}\n`);
      });
    },
    async closeBundle() {
      if (resolvedConfig?.command !== "build") {
        return;
      }

      const pluginManifest = createPluginManifest(meta, version, buildEntry);

      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest, null, 2)}\n`,
      );
    },
  };
}

export function postBuildPluginManifest({
  meta,
  version,
  distDir = "dist",
  entry = "index.js",
  manifestFileName = "manifest.json",
  pluginName = "acme:post-build-plugin-manifest",
}: PostBuildPluginManifestOptions): Plugin {
  let resolvedConfig: ResolvedConfig | undefined;

  return {
    name: pluginName,
    configResolved(config) {
      resolvedConfig = config;
    },
    async closeBundle() {
      if (resolvedConfig?.command !== "build") {
        return;
      }

      const pluginManifest = createPluginManifest(meta, version, entry);
      await mkdir(distDir, { recursive: true });
      await writeFile(
        join(distDir, manifestFileName),
        `${JSON.stringify(pluginManifest, null, 2)}\n`,
      );
    },
  };
}
